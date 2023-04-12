'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Financeiros = sequelize.define('Financeiros', {
    mes: DataTypes.DATE
  }, {});
  Financeiros.associate = function (models) {
    Financeiros.belongsTo(models.Materials, {
      foreignKey: 'materials_id'
    })
    Financeiros.belongsTo(models.Students, {
      foreignKey: 'students_id'
    })
  };
  return Financeiros;
};