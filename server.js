require("dotenv").config();
const express = require("express");

const routes = require("./routes");
const database = require("./models");


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/public/index.html"));
});


database
    .sequelize
    .sync(syncOptions)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`🌎=>> Server now on Port ${PORT}`)
        })
    })
