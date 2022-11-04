const mongoose = require('mongoose')

const filmeSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'Nome do filme e obrigatorio'],
        trim: true,
        minLength: [1 , 'nome do filme deve contar pelo menos 1 caractere'],
        maxLength: [20, 'nome pode conter no maximo 20 caracteres ']
    },
    data: {
        type: String,
    },
    nota: {
        type: Number,
        required : [true, "O filme precisa de uma nota!"]
    }
})

const filme = mongoose.model('filme', filmeSchema)

module.exports = filme