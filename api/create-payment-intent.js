require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (req, res) => {
  try {
    const { amount } = JSON.parse(req.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return res.status(200).json({ paymentIntent });
  } catch (error) {
    console.log({ error });

    return res.status(400).json({ error });
  }
};

export default createPaymentIntent;
