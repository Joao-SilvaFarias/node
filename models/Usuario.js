const sequelize = require("./db");
const Sequelize = require("sequelize");

const Usuario = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    }, 
    email: {
        type: Sequelize.STRING
    }
});

module.exports = Usuario;