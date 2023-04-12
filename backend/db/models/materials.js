'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Materials = sequelize.define('Materials', {
    nome: DataTypes.STRING,
    tipo: DataTypes.STRING,
    valor: DataTypes.FLOAT
  }, {});
  Materials.associate = function (models) {
    Materials.hasMany(models.Students, {
      foreignKey: 'materials_id'
    })
    Materials.hasMany(models.Financeiros, {
      foreignKey: 'materials_id'
    })
  };
  return Materials;
};