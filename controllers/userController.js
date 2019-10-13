const db = require('../models')
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const verify = require("../routes/verifyToken")




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
        if (usernameExist) return res.status(400).send("username is already taken")

        const emailExist = await db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (emailExist) return res.status(400).send("email is already taken")
        // Hash password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        // Create new user
        db.User.create({
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: hashedPassword,
        }).then(user => {
            res.send({ user: user.id })
        })
    },

    loginUser: async function (req, res) {
        const { error } = loginValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        // check if email is in the database
        const user = await db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!user) return res.status(400).send("email is incorrect")

        // Compare password
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword) return res.status(400).send("invalid password");


        // Get jwt token
        const token = jwt.sign({id: user.id}, process.env.TOKEN_SECRET)
        res.header("auth-token", token).send(token)
    },
    jwtRoute: async function (req, res){
        res.send(req.user)
    }
}