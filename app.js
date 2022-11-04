const mongoose = require('mongoose');
const url = 'mongodb+srv://mateus:josisoneca@cluster0.6efu8an.mongodb.net/test';
const express = require('express')
const port = 3000
const app = express();
const router = require('./router/filmesRouter')

app.use(express.json());
app.use('/filmes', router);

mongoose.connect(url)
     .then(app.listen(port, ()=>{
        console.log(`O app esta rodando na porta ${port}`)
    }))
    .catch(e => console.log("deu erro" + e))
