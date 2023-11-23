const {
  generateAccessToken,
  hashPassword,
  isPasswordValid,
  getAccessTokenFromHeaders,
} = require("./auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

describe("Utility Functions", () => {
  describe("hashPassword", () => {
    it("should hash the password", async () => {
      const password = "testPassword";
      const hashedPassword = await hashPassword(password);

      expect(hashedPassword).not.toBe(password);

      const isHashValid = await bcrypt.compare(password, hashedPassword);
      expect(isHashValid).toBe(true);
    });
  });

  describe("isPasswordValid", () => {
    it("should validate a correct password", async () => {
      const password = "testPassword";
      const hashedPassword = await bcrypt.hash(password, 10);

      const isValid = await isPasswordValid(password, hashedPassword);
      expect(isValid).toBe(true);
    });

    it("should not validate an incorrect password", async () => {
      const correctPassword = "testPassword";
      const incorrectPassword = "wrongPassword";
      const hashedPassword = await bcrypt.hash(correctPassword, 10);

      const isValid = await isPasswordValid(incorrectPassword, hashedPassword);
      expect(isValid).toBe(false);
    });
  });

  describe("generateAccessToken", () => {
    test("should generate a valid access token", () => {
      const user = { username: "testUser", password: "testPassword" };
      const token = generateAccessToken(user);

      const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      expect(decodedToken).toMatchObject({
        username: user.username,
        password: user.password,
      });
    });
  });

  describe("getAccessTokenFromHeaders", () => {
    it("should extract access token from headers", () => {
      const headers = {
        authorization: "Bearer dummyAccessToken",
      };

      const accessToken = getAccessTokenFromHeaders(headers);
      expect(accessToken).toBe("dummyAccessToken");
    });

    it("should return undefined if no access token is found in headers", () => {
      const headers = {};

      const accessToken = getAccessTokenFromHeaders(headers);
      expect(accessToken).toBeUndefined();
    });
  });
});
