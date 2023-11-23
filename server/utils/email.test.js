const { isEmailValid } = require("./email");

describe("isEmailValid", () => {
  it("should return true for a valid email", () => {
    const validEmail = "test@example.com";
    const isValid = isEmailValid(validEmail);
    expect(isValid).toBe(true);
  });

  it('should return false for an email without "@"', () => {
    const invalidEmail = "testexample.com";
    const isValid = isEmailValid(invalidEmail);
    expect(isValid).toBe(false);
  });

  it('should return false for an email without "." after "@"', () => {
    const invalidEmail = "test@examplecom";
    const isValid = isEmailValid(invalidEmail);
    expect(isValid).toBe(false);
  });

  it('should return false for an email with "." at the end', () => {
    const invalidEmail = "test@example.";
    const isValid = isEmailValid(invalidEmail);
    expect(isValid).toBe(false);
  });

  it('should return false for an email with "." before "@"', () => {
    const invalidEmail = "test.@example.com";
    const isValid = isEmailValid(invalidEmail);
    expect(isValid).toBe(false);
  });

  it('should return false for an email with "@" and "." together ', () => {
    const invalidEmail = "test@.examplecom";
    const isValid = isEmailValid(invalidEmail);
    expect(isValid).toBe(false);
  });
});
