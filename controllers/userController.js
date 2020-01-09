const db = require('../models')
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verify = require("../routes/verifyToken")




module.exports = {

    signin:  function (req, res) {
        console.log(req.body)
        db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            res.json({user })
        })
    },


    register: async function (req, res) {
        // Validate user registeration input
        const { error } = registerValidation(req.body);
        if (error) return res.json(error.details[0].message);

        // Find username/email if it already exists

        const emailExist = await db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (emailExist) return res.status(400)
        // // Hash password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create new user
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password:   hashedPassword,
        }).then(user => {
            res.json({ user: user.id })
        })
    },

    // signin: async function (req, res) {
    //     await db.User.findOne({
    //         where: {
    //             email: req.body.email
    //         }
    //     }).then(dbUser => res.send(dbUser))
        // const { error } = loginValidation(req.body);
        // if (error) return res.status(400).send(error.details[0].message);
        // check if email is in the database
        // const user = await db.User.findOne({
        //     where: {
        //         email: req.body.email
        //     }
        // })
        // return user;
        // if (!user) return res.status(400).send("email is incorrect")

        // // Compare password
        // const validPassword = await bcrypt.compare(req.body.password, user.password)
        // if (!validPassword) return res.status(400).send("invalid password");


        // // Get jwt token
        // const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET)
        // res.header("auth-token", token).send(token)
    // },
}