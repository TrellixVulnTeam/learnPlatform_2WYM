const Sequelize = require('sequelize');

const sequelize = new Sequelize("learnplatform", "root", "Gabrielyin-323232", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function() {
    console.log("Conexão realizada com sucesso");
}).catch(function() {
    console.log("Erro: Conexão não realizada com sucesso");
});

module.exports = sequelize;