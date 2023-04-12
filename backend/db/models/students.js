'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define('Students', {
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    email: DataTypes.STRING,
    endereco: DataTypes.STRING,
    nome_responsavel: DataTypes.STRING,
    telefone_responsavel: DataTypes.STRING
  }, {});
  Students.associate = function (models) {
    Students.belongsTo(models.Materials, {
      foreignKey: 'materials_id'
    })
    Students.hasMany(models.Financeiros, {
      foreignKey: 'students_id'
    })
    Students.hasMany(models.Turmas, {
      foreignKey: 'students_id'
    })
  };
  return Students;
};