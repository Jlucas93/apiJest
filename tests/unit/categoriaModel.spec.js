const dbConnection = require('../../src/database/models')
const { Categoria } = require('../../src/database/models')


describe('Teste Unitários Categoria', () => {
  it("Criando nova categoria", async () => {
    const categoria = await Categoria.create({
      id: 10,
      codigo: 'novoCodigo',
      titulo: 'novoTitulo',
      status: 0
    })
    expect(categoria).toBeDefined()
  })

  it('Lista de categorias', async () => {
    const categorias = await Categoria.findAll()

    expect(categorias).toBeDefined()

  })
  it('Buscado uma categoria por id', async () => {
    const categoria = await Categoria.findOne({ where: { id: 10 } })

    expect(categoria).toBeDefined()
    expect(categoria.codigo).toBe('novoCodigo')
  })
  it('Atualizando uma categoria', async () => {
    const categoria = await Categoria.update({
      codigo: 'codigoAtualizado'
    },
      {
        where: {
          id: 10
        }
      })
    expect(categoria).toBeDefined()
  })
  it('Deletando uma categoria', async () => {
    await Categoria.destroy({ where: { id: 10 } })
    const categoria = await Categoria.findOne({ where: { id: 10 } })

    expect(categoria).toBeNull()
  })
  afterAll(async () => {
    await dbConnection.sequelize.close()

  })
})