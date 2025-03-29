const express = require("express");
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");
const bodyParser = require("body-parser");

const app = express();

app.engine("handlebars", handlebars.engine({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Página principal");
});

app.get("/formulario", (req, res) => {
    res.render("form");
})

app.post("/form", (req, res) => {
    res.send(`Nome: ${req.body.nome}<br>E-mail: ${req.body.email}`);
});

app.listen(8081, () => {
    console.log("<h1>Servidor rodando na url http://localhost:8081</h1>");
});