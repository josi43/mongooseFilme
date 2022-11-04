const express = require('express')
const router = express();
const controller = require('../controller/filmesControlles')

router.get('/', controller.listar)
router.post('/criar', controller.criar)
router.delete('/deletar/:id', controller.deletar1)
router.put('/:id', controller.atualizar);

module.exports = router