'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class actors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.contents,{
        through: "content_actors",
        foreignKey: "actor_id"
      });
    }
  };
  actors.init({
    name: DataTypes.STRING,
    last_update: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'actors',
  });
  return actors;
};