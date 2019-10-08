const Joi = require('@hapi/joi');


const registerValidation = data => {
    const schema = Joi.object({
        // email: Joi.string()
        //     .min(5)
        //     .required()
        //     .email(),
        // password: Joi.string()
        //     .required()
        //     .min(6)
        username: Joi.string()
            .min(5)
            .required(),
        firstname: Joi.string()
            .max(30)
            .required(),
        lastname: Joi.string()
            .max(30)
            .required(),
        email: Joi.string()
            .min(5)
            .required()
            .email(),
        password: Joi.string()
            .required()
            .min(6)
    })
    return schema.validate(data)
}

const loginValidation = data => {

    const schema = {
        email: Joi.string()
            .min(5)
            .required()
            .email(),
        password: Joi.string()
            .pattern(/^[a-zA-Z0-9]{3,30}$/)
    }
    return Joi.validate(data, schema);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;