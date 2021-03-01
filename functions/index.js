const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')
('sk_test_51IODXVIt7oNowLXVkXlSFIHDX9f4N4jHMVHJ1CZG72okYpg83lQ1d7f9HksWRL0bcoXh4lypfKR0A1WEOTPlhh7900Lwxr3Xek'
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/fir-f1a63/us-central1/api

