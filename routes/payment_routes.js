import { Router } from "express";
import { createOrder } from "../controllers/payment/create_order.js";
import { receiveWebhook } from "../controllers/payment/receive_webhook.js";

const payment_router = Router();

payment_router.post('/create-order', createOrder )

payment_router.get('/success', (req, res) => res.send('success'))
payment_router.get('/failure', (req, res) => res.send('failure'))
payment_router.get('/pending', (req, res) => res.send('pending'))

payment_router.post('/webhook', receiveWebhook)

export default payment_router;