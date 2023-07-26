import mercadopago from "mercadopago";

export const receiveWebhook = async (req, res) => {
    console.log('WEB HOOK QUERY >>>', req.query)
    const payment = req.query
    try {
        if (payment.type === "payment") {
            const data = await mercadopago.payment.findById(payment['data.id'])
            console.log(data)
        }
        res.sendStatus(200);
    } catch (error) {
        console.log('ERROR WEBHOOK >>>', error);
        return res.sendStatus(500);
    }
};
