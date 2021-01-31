const express = require("express");
const bodyParser = require("body-parser");

const db = require('./app/db/models');

const app = express();

//metodo para dropar e recriar a tabela
//   db.sequelize.sync({force: true}).then(() =>{
//      console.log('tabela funcionando')
//   })

//para usar o json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));



app.get("/", (req,res) => {
    res.json({
        message: "Grupou API"
    })
})

//importação do Routes
require("./app/routes")(app);

//Identifica a porta para app porta 3000
app.listen(3000, () => {
    console.log("Servidor Rodando!!!")
})