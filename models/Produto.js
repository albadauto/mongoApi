const mongoose = require('mongoose')//Chama a biblioteca
const schema = mongoose.Schema//Instancia o Schema

const Produto = new schema({
    id:{
        type: Number,
    },
    nome:{
        type: String,
    },
    preco:{
        type: Number,
    },
    tipo:{
        type: String,
    },
    fornecedor:{
        type: String
    }
})//Model do produto

mongoose.model('Produto', Produto)//"Exporta" o model do produto