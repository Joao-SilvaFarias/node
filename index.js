const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const { type } = require("os");
const Usuario = require("./models/Usuario");

const app = express();

app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
        res.render("home");
});

app.get("/formulario", (req, res) => {
    res.render("form");
})

app.post("/form", (req, res) => {
    Usuario.create({
        nome: req.body.nome,
        email: req.body.email
    }).then(() => {
        res.redirect("/");
    }).catch((erro) => {
        res.send(`Erro: ${erro}`);
    });
});
app.listen(8081, () => {
    console.log("<h1>Servidor rodando na url http://localhost:8081</h1>");
});