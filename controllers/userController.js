const db = require('../models')
const { registerValidation } = require("../validation");
// const Joi = require('@hapi/joi');




module.exports = {

    findAll: function (req, res) {
        db.User.findOne({
            where: {
                id: 1
            }
        }).then(dbUser => res.send(dbUser))
    },


    createNewUser: async function (req, res) {
        // Validate user registeration input
        const { error } = registerValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        
        // Find username/email if it already exists
        const usernameExist = await db.User.findOne({
            where: {
                username: req.body.username
            }
        })
        if(usernameExist) return res.status(400).send("username is already taken")
        const emailExist = await db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        if(emailExist) return res.status(400).send("email is already taken")

        // Create new user
        db.User.create({
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        }).then(user => {
            res.send(user)
        })
    }
}