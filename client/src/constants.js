export const CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://food-delivery-app-api-o9cv.onrender.com";
export const RAZORPAY_SCRIPT_URL =
  "https://checkout.razorpay.com/v1/checkout.js";

export const APP_NAME = "Yummy Tummy";
