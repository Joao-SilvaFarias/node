const express = require("express");
const handlebars = require("express-handlebars");
const Sequelize = require("sequelize");
const bodyParser = require("body-parser");
const { type } = require("os");

const app = express();
const sequelize = new Sequelize("node", "root", "Jv,40028922", {
    host: "localhost",
    dialect: "mysql"
});

const Usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    }, 
    email: {
        type: Sequelize.STRING
    }
});

//Usuario.sync({force: true});

/*Usuario.create({
    nome: "João Victor Silva Farias", 
email: "joaovictor@gmail.com"
})*/

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