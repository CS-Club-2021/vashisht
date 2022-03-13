import "https://checkout.razorpay.com/v1/checkout.js";

export const payAmount = (data, payButton) => {
  fetch("https://vashisth.herokuapp.com/razorpay/createOrder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      var options = {
        key: "rzp_test_TinA4ekeaBj49K", // Enter the Key ID generated from the Dashboard
        order_id: response.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "https://vashisth.herokuapp.com/razorpay/finishOrder",
        amount: data?.amount,
      };
      let rzp1 = new Razorpay(options);
      payButton.addEventListener("click", (e) => {
        rzp1.open();
      });
    });
};
