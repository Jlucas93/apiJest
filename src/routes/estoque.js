const express = require('express')
const router = express.Router()
const estoque = require('../controllers/estoque')

router.get('/produtos/:id/estoque', estoque.showOne)
router.patch('/prodtuos/:id/estoque', estoque.edit)
router.delete('/prodtuos/:id/estoque', estoque.destroy)

module.exports = router

