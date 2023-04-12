'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define('Turmas', {
    nome: DataTypes.STRING,
    turno: DataTypes.STRING
  }, {});
  Turmas.associate = function (models) {
    Turmas.belongsTo(models.Students, {
      foreignKey: 'students_id'
    })
    Turmas.belongsTo(models.Teams, {
      foreignKey: 'docente_id'
    })
  };
  return Turmas;
};