"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cashier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cashier.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: String,
        allowNull: false,
      },
      father_name: {
        type: String,
       
      },
      age: {
        type: Number,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "cashier",
    }
  );
  return cashier;
};
