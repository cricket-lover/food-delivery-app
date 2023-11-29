const Razorpay = require("razorpay");
const { handleOrders, handlePaymentSuccess } = require("./paymentHandlers");

jest.mock("razorpay");

describe("handleOrders", () => {
  test("should create a new order and return it", async () => {
    const createOrderMock = jest
      .fn()
      .mockResolvedValue({ id: "fakeOrderId", amount: 1000 });
    Razorpay.mockImplementation(() => ({
      orders: { create: createOrderMock },
    }));

    const req = { body: { amount: 1000 } };
    const res = {
      send: jest.fn(),
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await handleOrders(req, res);

    expect(createOrderMock).toHaveBeenCalledWith({
      amount: 1000,
      currency: "INR",
    });
    expect(res.json).toHaveBeenCalledWith({ id: "fakeOrderId", amount: 1000 });
  });

  test("should handle errors and return 500 status", async () => {
    Razorpay.mockImplementation(() => ({
      orders: { create: jest.fn().mockRejectedValue("Some error") },
    }));

    const req = { body: { amount: 1000 } };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await handleOrders(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith("Some error");
  });
});

describe("handlePaymentSuccess", () => {
  test("should return a success message", () => {
    const res = { json: jest.fn() };

    handlePaymentSuccess({}, res);

    expect(res.json).toHaveBeenCalledWith({
      msg: "Payment Successful",
      success: true,
    });
  });
});
