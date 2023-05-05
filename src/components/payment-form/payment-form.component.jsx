import { useContext, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

import Button from "../button/button.component";

import "./payment-form.styles.scss";

const PaymentForm = () => {
  const { cartTotalPrice } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const amount = parseInt(cartTotalPrice * 100);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Joao Mario Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successful!");
      }
    }
  };

  return (
    <div className="payment-form-container">
      <div className="form-container">
        <h2>Credit Card Payment: </h2>
        <div className="card-element-container">
          <CardElement></CardElement>
        </div>
        <div className="payment-btn-container">
          <Button
            disabled={isProcessingPayment}
            buttonType={"inverted"}
            onClick={paymentHandler}
          >
            {isProcessingPayment ? "Processing..." : "Pay now"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
