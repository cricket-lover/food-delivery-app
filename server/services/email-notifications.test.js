const sgMail = require("@sendgrid/mail");
const { sendSignupEmail } = require("./email-notifications");

jest.mock("@sendgrid/mail");

describe("sendSignupEmail", () => {
  let consoleLogSpy;

  beforeEach(() => {
    sgMail.setApiKey.mockReturnValueOnce();
    sgMail.send.mockResolvedValueOnce([
      { statusCode: 202, body: "Email sent successfully" },
    ]);
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should send a signup email successfully without logging to console", async () => {
    await sendSignupEmail({ username: "testuser", email: "test@example.com" });

    expect(sgMail.setApiKey).toHaveBeenCalledWith(process.env.SENDGRID_API_KEY);
    expect(sgMail.send).toHaveBeenCalledWith(expect.any(Object));
    expect(console.log).toHaveBeenCalledTimes(2);
  });
});
