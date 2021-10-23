const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.SERVER_PORT || 8081;
const mongoose = require('mongoose');//Biblioteca mongoose
const Produtos = require('./routes/Produtos')//Produtos

//ROUTES
app.use('/Produtos', Produtos)

//DB CONNECTION

mongoose.connect("mongodb://localhost/novaApi", () => {
  console.log("conectado ao banco de dados")
})//Conexao ao bd

//SERVER CONFIG
app.listen(port, () => console.log(`Conectado na porta ${port}`))




