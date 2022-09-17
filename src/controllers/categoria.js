const { Categoria, Produto } = require('../database/models')

const categoriaController = {
  showAll: async (_req, res) => {
    try {
      const categorias = await Categoria.findAll()

      return res.status(200).json(categorias)
    } catch (error) {
      console.log(error)

      return res.status(500).json('Bad Request')
    }
  },
  showOne: async (req, res) => {
    const { id } = req.params
    try {
      const categoria = await Categoria.findOne({ where: { id: id } })

      return res.status(200).json(categoria)
    } catch (error) {
      console.log(error)

      return res.status(500).json('Bad Request')
    }
  },
  create: async (req, res) => {
    const {
      codigo,
      titulo,
      status
    } = req.body
    try {
      const categoria = await Categoria.create({
        codigo,
        titulo,
        status
      })
      return res.status(201).json({ categoria: categoria })
    } catch (error) {
      console.log(error)

      return res.status(500).json('Error, category not created')
    }
  },
  edit: async (req, res) => {
    const { id } = req.params
    const {
      codigo,
      titulo,
      status
    } = req.body
    try {
      const categoria = await Categoria.update({
        codigo,
        titulo,
        status
      },
        {
          where: {
            id: id
          }
        })
      return res.status(200).json({ categoria })
    } catch (error) {
      console.log(error)

      return res.status(500).json('Bad Request')
    }
  },
  destroy: async (req, res) => {
    const { id } = req.params
    try {
      await Categoria.destroy({
        where: { id: id }
      })
      await Produto.update({
        idCategoria: null
      }, {
        where: {
          idCategoria: id
        }
      })
      return res.status(200).json('Category deleted')
    } catch (error) {
      console.log(error)

      return res.status(500).json('Error, Category was not deleted')
    }
  }
}
module.exports = categoriaController