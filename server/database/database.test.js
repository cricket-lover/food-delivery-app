const {
  getCurrentUser,
  doesUserExist,
  addNewUser,
  blockAccessToken,
  getBlockedTokens,
  connectDB,
} = require("./index");

const mongoose = require("mongoose");
const { User, BlockedTokens } = require("../models");
const { DB_NAME } = require("../constants");

jest.mock("../models");

describe("getCurrentUser", () => {
  test("should return the user with the given username", async () => {
    const findMock = jest.spyOn(User, "find").mockResolvedValue([
      { username: "testuser", email: "testuser@example.com" },
      { username: "otheruser", email: "otheruser@example.com" },
    ]);

    const result = await getCurrentUser("testuser");

    expect(findMock).toHaveBeenCalled();
    expect(result).toEqual({
      username: "testuser",
      email: "testuser@example.com",
    });
  });

  test("should return null if the user with the given username is not found", async () => {
    jest
      .spyOn(User, "find")
      .mockResolvedValue([
        { username: "otheruser", email: "otheruser@example.com" },
      ]);

    const result = await getCurrentUser("testuser");

    expect(result).toBeUndefined();
  });
});

describe("doesUserExist", () => {
  test("should return true if the user exists", async () => {
    jest.spyOn(User, "find").mockResolvedValue([
      { username: "testuser", email: "testuser@example.com" },
      { username: "otheruser", email: "otheruser@example.com" },
    ]);

    const result = await doesUserExist("testuser");

    expect(result).toBe(true);
  });

  test("should return false if the user does not exist", async () => {
    jest
      .spyOn(User, "find")
      .mockResolvedValue([
        { username: "otheruser", email: "otheruser@example.com" },
      ]);

    const result = await doesUserExist("testuser");

    expect(result).toBe(false);
  });
});

describe("addNewUser", () => {
  test("should add a new user", async () => {
    jest.spyOn(User, "find").mockResolvedValue([]);
    const saveMock = jest.spyOn(User.prototype, "save").mockResolvedValue();

    await addNewUser("newUser", "newuser@example.com", "hashedPassword");

    expect(saveMock).toHaveBeenCalled();
    expect(saveMock).toHaveBeenCalledWith();
    saveMock.mockRestore();
  });

  test("should not add a new user if the username already exists", async () => {
    jest.spyOn(User, "find").mockResolvedValue([{ username: "existingUser" }]);
    const saveMock = jest.spyOn(User.prototype, "save").mockResolvedValue();

    await addNewUser(
      "existingUser",
      "existinguser@example.com",
      "hashedPassword"
    );

    expect(saveMock).not.toHaveBeenCalled();
  });
});

describe("blockAccessToken", () => {
  test("should insert the access token into BlockedTokens", async () => {
    const insertManyMock = jest
      .fn()
      .mockResolvedValue([{ tokens: ["accessToken"] }]);
    BlockedTokens.insertMany.mockImplementation(insertManyMock);

    const result = await blockAccessToken("accessToken");

    expect(insertManyMock).toHaveBeenCalledWith({ tokens: ["accessToken"] });
    expect(result).toEqual([{ tokens: ["accessToken"] }]);
  });
});

describe("getBlockedTokens", () => {
  test("should return an array of blocked tokens", async () => {
    const findMock = jest
      .fn()
      .mockResolvedValue([{ tokens: ["token1"] }, { tokens: ["token2"] }]);
    BlockedTokens.find.mockImplementation(findMock);

    const result = await getBlockedTokens();

    expect(findMock).toHaveBeenCalledWith();
    expect(result).toEqual(["token1", "token2"]);
  });

  test("should return an empty array if no tokens are blocked", async () => {
    const findMock = jest.fn().mockResolvedValue([]);
    BlockedTokens.find.mockImplementation(findMock);

    const result = await getBlockedTokens();

    expect(findMock).toHaveBeenCalledWith();
    expect(result).toEqual([]);
  });
});

describe("connectDB", () => {
  test("should connect to MongoDB successfully", async () => {
    jest.mock("mongoose");

    const connectMock = jest
      .fn()
      .mockResolvedValue({ connection: { host: "FakeHost" } });
    jest.spyOn(mongoose, "connect").mockImplementation(connectMock);
    const consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});
    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    await connectDB();
    expect(connectMock).toHaveBeenCalledWith(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    expect(console.log).toHaveBeenCalledWith(
      "MongoDB connection running on FakeHost"
    );
    consoleLogSpy.mockRestore();
    consoleErrorSpy.mockRestore();
  });
  test("should catch the error when MongoDB connection failed", async () => {
    jest.mock("mongoose");

    const connectMock = jest
      .fn()
      .mockRejectedValue("Error thrown from mongoose connection");
    jest.spyOn(mongoose, "connect").mockImplementation(connectMock);

    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    const processExitSpy = jest
      .spyOn(process, "exit")
      .mockImplementation(() => {});

    await connectDB();
    expect(connectMock).toHaveBeenCalledWith(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    expect(console.error).toHaveBeenCalledWith(
      "MongoDB connection error: ",
      "Error thrown from mongoose connection"
    );
    expect(process.exit).toHaveBeenCalledWith(1);
    consoleErrorSpy.mockRestore();
    processExitSpy.mockRestore();
  });
});
