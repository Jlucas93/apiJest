'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCategoria: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Categorias',
          key: 'id'
        },
        allowNull: false
      },
      codigo: Sequelize.STRING,
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: Sequelize.TEXT,
      valor: Sequelize.DECIMAL,
      status: Sequelize.INTEGER
    })
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Produtos')
  }
};
