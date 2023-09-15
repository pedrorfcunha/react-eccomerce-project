import { createContext, useState, useContext } from "react";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { CartContext } from "./cart.context";
import { UserContext } from "./user.context";

export const PaymentContext = createContext({
  setIsProcessingPayment: () => null,
  isProcessingPayment: null,
  paymentHandler: () => {},
});

export const PaymentProvider = ({ children }) => {
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

  const value = { isProcessingPayment, setIsProcessingPayment, paymentHandler };

  return (
    <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
  );
};
