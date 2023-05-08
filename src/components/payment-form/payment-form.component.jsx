import { CardElement } from "@stripe/react-stripe-js";

import { useContext } from "react";

import { PaymentContext } from "../../contexts/payment.context";

import Button from "../button/button.component";

import "./payment-form.styles.scss";

const PaymentForm = () => {
  const { paymentHandler, isProcessingPayment } = useContext(PaymentContext);

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
