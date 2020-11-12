'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredients = sequelize.define('Ingredients', {
    amount: DataTypes.NUMERIC,
    measurementUnitId: DataTypes.INTEGER,
    foodStuff: DataTypes.STRING,
    recipeId: DataTypes.INTEGER
  }, {});
  Ingredients.associate = function(models) {
    // associations can be defined here
  };
  return Ingredients;
};