'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.contents,{
        through: "content_genres",
        foreignKey: "genre_id"
      });
    }
  };
  genres.init({
    name: DataTypes.STRING,
    last_update: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'genres',
  });
  return genres;
};