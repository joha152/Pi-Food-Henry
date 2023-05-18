const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    
    id:{
      type: DataTypes.UUID,      
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    summary: {
      type: DataTypes.TEXT,
    },
    healthScore: {
      type: DataTypes.INTEGER,
    },
    instructions: {
      type: DataTypes.STRING,
    },
    createdByDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  },{timestamps: false});
};
