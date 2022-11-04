const Filme = require("../model/filmeModel");
const { ObjectID } = require("bson");

async function listar(req,res){
    await Filme
    .find({})
    .then((filmes)=>{
        return res.json(filmes);
    })
    .catch((e)=>{
        return res.status(500).json(e)
    })
}

async function criar(req,res){
    const filme = new Filme(req.body);
    await filme
    .save()
    .then((doc)=>{
        return res.status(201).json(doc)
    })
    .catch((e)=>{
        const msgErro = {};
        Object.values(e.errors)
        .forEach(({properties}) => {
            msgErro[properties.path] = properties.message;
        });
        return res.status(422).json(msgErro)
    })
};

async function deletar(req,res){
    await Filme.findByIdAndDelete({_id:ObjectID(req.params.id)})
    .then((filme) => {
        if(filme) return res.status(204).end();
        else return res.staus(404).json("Filme nao localizado")
    })
    .catch((e) => {
        return res.status(500).json(e)
    })
}


module.exports = { listar, criar, deletar };