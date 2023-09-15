import { enqueueSnackbar } from "notistack";
import { API_URL, RAZORPAY_SCRIPT_URL } from "../constants";

export const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const displayRazorpay = async (orderDetails) => {
  const res = await loadScript(RAZORPAY_SCRIPT_URL);

  if (!res) {
    enqueueSnackbar("Razorpay SDK failed to load. Are you online?", {
      variant: "error",
    });
    return;
  }

  // creating a new order
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderDetails),
  });
  const result = await response.json();

  if (!result) {
    enqueueSnackbar("Server error. Are you online?", { variant: "error" });
    return;
  }

  // Getting the order details back
  const { amount, id: order_id, currency } = result;
  const options = {
    key: "rzp_test_3O7kpMd8UDq8yp", // Enter the Key ID generated from the Dashboard
    amount: amount.toString(),
    currency: currency,
    name: "Yummy Tummy",
    description: "Test Transaction",
    order_id: order_id,
    handler: async function (response) {
      const data = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
      };

      const result = await fetch(`${API_URL}/payment/success`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());

      enqueueSnackbar(result.msg, { variant: "success" });
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
