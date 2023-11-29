const {
  getAllRestaurants,
  pageNotFoundHandler,
} = require("./restaurantsHandler");

describe("getAllRestaurants", () => {
  test("should return all restaurants with 200 status", () => {
    const dummyRestaurantData = [{ dummyRestaurant: "dummyRestaurant" }];
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnValue(dummyRestaurantData),
    };

    getAllRestaurants({}, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json()).toEqual(dummyRestaurantData);
  });
});

describe("pageNotFoundHandler", () => {
  test("should return a 404 response with an error message", () => {
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    pageNotFoundHandler({}, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      err: "Page Not Found in the server",
    });
  });
});
