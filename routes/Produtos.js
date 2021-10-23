const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/produto')//Carrega a model produto
const ProdutoModel = mongoose.model('Produto')//Model produto (ver pasta models/produto)

router.get('/', (req, res) => {
    res.status(200).send({ message: "All Ok!"})//Primeira rota
})

router.get('/Cadastrar', async (req, res, next) => {
    try{
        var Insert
        for (let i = 0; i < 40; i++){

            Insert = {
                nome: "Ruffles" + i,
                preco: 3000,
                id: i,
                tipo:"Batata",
                fornecedor: "Ruffles"
            }
            await new ProdutoModel(Insert).save()
        }
        res.status(200).send({message: "ALL OKKKK"})

    }catch(err){
        console.log(err)
    }
})


router.get('/Procurar/:id', async (req,res) => {
    try{
        await ProdutoModel.findOne({id:req.params.id}).then((produtos) => {
            if (produtos){
                res.status(200).send({data: produtos});
            }else{
                res.status(400).send({error: true, message:"The id not exist"})
            }
        })
    }catch(err){
        console.log(err)
    }
})



module.exports = router