const Joi = require('@hapi/joi');


const registerValidation = data => {
    const schema = Joi.object({
        firstName: Joi.string()
            .max(30)
            .required(),
        lastName: Joi.string()
            .max(30)
            .required(),
        email: Joi.string()
            .min(5)
            .required()
            .email(),
        password: Joi.string()
            .pattern(/^[a-zA-Z0-9]{6,30}$/)
            .min(6)
    })
    return schema.validate(data)
}

const signinValidation = data => {

    const schema = Joi.object({
        email: Joi.string()
            .min(5)
            .required()
            .email(),
        password: Joi.string()
            .pattern(/^[a-zA-Z0-9]{6,30}$/)
            .min(6)
    })
    return schema.validate(data)
}


module.exports.registerValidation = registerValidation;
module.exports.signinValidation = signinValidation;