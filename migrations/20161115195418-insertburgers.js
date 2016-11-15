'use strict';
var models = require("../models");
module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
     return models.Burger.bulkCreate(
      [
        {burger_name: "Double Cheeseburger"},
        {burger_name: "Triple Cheeseburger"},
        {burger_name: "Quadruple Cheeseburger"},
        {burger_name: "Quintuple Cheeseburger"},
        {burger_name: "infinite Cheeseburger"}
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return models.Burger.destroy( {where:{burger_name: 
      [
        "Double Cheeseburger",
        "Triple Cheeseburger",
        "Quadruple Cheeseburger",
        "Quintuple Cheeseburger",
        "infinite Cheeseburger"
      ]}}
    )
  }
};
