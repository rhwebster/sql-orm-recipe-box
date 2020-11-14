'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING
  }, {});
  Recipe.associate = function(models) {
    Recipe.hasMany(models.Ingredient, { onDelete: 'CASCADE', hooks: true, foreignKey: 'recipeId' });
    Recipe.hasMany(models.Instruction, { onDelete: 'CASCADE', hooks: true, foreignKey: 'recipeId' });
  };
  return Recipe;
};