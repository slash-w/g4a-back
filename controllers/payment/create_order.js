import mercadopago from "mercadopago";


export const createOrder = async (req, res) => {
    mercadopago.configure({
        access_token: process.env.MP_TOKEN
    })

    const result = await mercadopago.preferences.create({
        items: [
            {
                title: req.body.title,
                unit_price: req.body.price,
                currency_id: "ARS",
                quantity: 1,
            }
        ],
        back_urls: {
            success: "http://localhost:8080/api/payment/success",
            failure: "http://localhost:8080/api/payment/failure",
            pending: "http://localhost:8080/api/payment/pending"
        },
        notification_url: "https://545d-138-59-172-205.ngrok.io/api/payment/webhook"
    })

    console.log(result)
    console.log('ENV TOKEN >>>', process.env.MP_TOKEN)
    console.log('it works!!')
    
    res.send(result.body)
}