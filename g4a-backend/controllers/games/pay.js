const stripe = require("stripe")(
  "sk_test_51NfjIYGeX3wi2NjaFBArkYpXGhmP2Um7sRqWrxlwHvg6JNN3RE16noGDAwZrj5agKk5SMN8tHzFxfXHGmWVfIIFM00UPBTIjAB"
);

export default async (req, res, next) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "usdS",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.json({ paymentIntent: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating Payment Intent:", error);
    res.status(500).json({ error: "An error occurred" });
  }
};
