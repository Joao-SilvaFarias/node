const Sequelize = require("sequelize");
const sequelize = new Sequelize("node", "root", "Jv,40028922", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;