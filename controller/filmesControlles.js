const Filme = require("../model/filmeModel");
const { ObjectID } = require("bson");

async function listar(req, res) {
  await Filme.find({})
    .then((filmes) => {
      return res.json(filmes);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
}

async function criar(req, res) {
  const filme = new Filme(req.body);
  await filme
    .save()
    .then((doc) => {
      return res.status(201).json(doc);
    })
    .catch((e) => {
      const msgErro = {};
      Object.values(e.errors).forEach(({ properties }) => {
        msgErro[properties.path] = properties.message;
      });
      return res.status(422).json(msgErro);
    });
}

async function deletar(req, res) {
  try {
    const filme = await Filme.findByIdAndDelete(req.params.id);
    if (!filme) res.status(404).send("Nao achei o item");
    res.status(200).send();
  } catch (e) {
    res.status(500).send(e);
  }
}

async function atualizar(req, res) {
  const filme = new Filme(req.body);
  try {
    await Filme.findByIdAndUpdate(req.params.id, req.body);
    await Filme.save();
    res.send(filme);
  } catch (e) {
    res.status(500).send(e);
  }
}

module.exports = { listar, criar, deletar, atualizar };
