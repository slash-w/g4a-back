import Joi from "joi";

const userSignin = Joi.object({
    email: Joi.string()
        .required()
        .email({
            minDomainSegments: 2
        }),
    password: Joi.string()
        .required()
        .min(8)
        .max(35)
        .alphanum(),
})

export default userSignin