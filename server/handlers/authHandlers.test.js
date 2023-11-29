const {
  addNewUser,
  doesUserExist,
  getCurrentUser,
  blockAccessToken,
} = require("../database");
const { sendSignupEmail } = require("../services/email-notifications");
const {
  hashPassword,
  isPasswordValid,
  generateAccessToken,
  getAccessTokenFromHeaders,
} = require("../utils/auth");
const { handleRegister, handleLogin, handleLogout } = require("./authHandlers");

jest.mock("../services/email-notifications");
jest.mock("../utils/auth");
jest.mock("../database");

describe("handleRegister", () => {
  test("should register a new user and return 201 status", async () => {
    const req = {
      body: {
        username: "testuser",
        password: "testpassword",
        email: "test@example.com",
      },
    };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    hashPassword.mockResolvedValue("hashedPassword");
    addNewUser.mockResolvedValue();
    sendSignupEmail.mockResolvedValue();

    await handleRegister(req, res);

    expect(hashPassword).toHaveBeenCalledWith(req.body.password);
    expect(addNewUser).toHaveBeenCalledWith(
      "testuser",
      "test@example.com",
      "hashedPassword"
    );
    expect(sendSignupEmail).toHaveBeenCalledWith({
      username: "testuser",
      email: "test@example.com",
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      username: "testuser",
      email: "test@example.com",
    });
  });

  test("should handle errors and return 500 status", async () => {
    const req = {
      body: {
        username: "testuser",
        password: "testpassword",
      },
    };

    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    hashPassword.mockRejectedValue("hashPassword Throwed an error");
    addNewUser.mockRejectedValue("addNewUser Throwed an error");
    sendSignupEmail.mockRejectedValue("sendSignupEmail Throwed an error");

    await handleRegister(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith("hashPassword Throwed an error");
  });
});

describe("handleLogin", () => {
  test("should return 401 when the username is not found", async () => {
    const req = {
      body: {
        username: "testuser",
        password: "testpassword",
      },
    };

    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    doesUserExist.mockResolvedValue(false);

    await handleLogin(req, res);
    expect(doesUserExist).toHaveBeenCalledWith(req.body.username);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ err: "Username Not Found" });
  });

  test("should return 401 when the provided credentials are wrong", async () => {
    const req = {
      body: {
        username: "testuser",
        password: "testpassword",
      },
    };

    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    doesUserExist.mockResolvedValue(true);
    getCurrentUser.mockResolvedValue(req.body);
    isPasswordValid.mockResolvedValue(false);

    await handleLogin(req, res);
    expect(doesUserExist).toHaveBeenCalledWith(req.body.username);
    expect(getCurrentUser).toHaveBeenCalledWith(req.body.username);
    expect(isPasswordValid).toHaveBeenCalledWith(
      req.body.password,
      req.body.password
    );
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ err: "Wrong credentials" });
  });

  test("should return 200 when the provided credentials are valid", async () => {
    const accessToken = "fakeAccessToken";
    const req = {
      body: {
        username: "testuser",
        password: "testpassword",
      },
    };

    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    doesUserExist.mockResolvedValue(true);
    getCurrentUser.mockResolvedValue(req.body);
    isPasswordValid.mockResolvedValue(true);
    generateAccessToken.mockReturnValue(accessToken);

    await handleLogin(req, res);
    expect(doesUserExist).toHaveBeenCalledWith(req.body.username);
    expect(getCurrentUser).toHaveBeenCalledWith(req.body.username);
    expect(isPasswordValid).toHaveBeenCalledWith(
      req.body.password,
      req.body.password
    );
    expect(generateAccessToken).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ accessToken });
  });

  test("should return 500 when the there is any error", async () => {
    const req = {
      body: {
        username: "testuser",
        password: "testpassword",
      },
    };

    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    doesUserExist.mockRejectedValue("doesUserExist Throwed an error");
    getCurrentUser.mockRejectedValue("getCurrentUser Throwed an error");
    isPasswordValid.mockRejectedValue("isPasswordValid Throwed an error");

    await handleLogin(req, res);
    expect(doesUserExist).toHaveBeenCalledWith(req.body.username);
    expect(getCurrentUser).toHaveBeenCalledWith(req.body.username);
    expect(isPasswordValid).toHaveBeenCalledWith(
      req.body.password,
      req.body.password
    );
    expect(generateAccessToken).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      err: "doesUserExist Throwed an error",
    });
  });
});

describe("handleLogout", () => {
  test("should log out a user and return 204 status", async () => {
    const accessToken = "fakeAccessToken";
    const req = { headers: { authorization: `Bearer ${accessToken}` } };
    blockAccessToken.mockResolvedValue();
    getAccessTokenFromHeaders.mockReturnValue(accessToken);

    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await handleLogout(req, res);

    expect(getAccessTokenFromHeaders).toHaveBeenCalledWith(req.headers);
    expect(blockAccessToken).toHaveBeenCalledWith(accessToken);
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.json).toHaveBeenCalledWith({ msg: "You're now logged out." });
  });

  test("should log out a user and return 500 status", async () => {
    const accessToken = "fakeAccessToken";
    const req = { headers: { authorization: `Bearer ${accessToken}` } };
    getAccessTokenFromHeaders.mockReturnValue(accessToken);
    blockAccessToken.mockRejectedValue();

    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    await handleLogout(req, res);

    expect(getAccessTokenFromHeaders).toHaveBeenCalledWith(req.headers);
    expect(blockAccessToken).toHaveBeenCalledWith(accessToken);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      msg: "There is a error while logging out",
    });
  });
});
