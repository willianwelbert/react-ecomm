import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = token => {
  console.log(token);
  alert("Payment Sucessful");
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_rOmUO8C7XuirFO16UuXBM9AE00eYuYsnAV";

  return (
    <StripeCheckout
      currency="BRL"
      label="Pay Now"
      name="CRWN Clothing - Willian Welbert - Mockup Ecomm "
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is R${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
