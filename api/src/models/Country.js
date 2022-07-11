const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      // get(){
      //  return this.getDataValue("id").slice(0,3).toUpperCase()
      // }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    bandera:{
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate:{
        isUrl: true
      }
    },
    continente:{
      type: DataTypes.STRING,
      allowNull: false
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false
    },
    subregion:{
      type: DataTypes.STRING
    },
    area:{
      type: DataTypes.FLOAT,
    },
    poblacion:{
      type: DataTypes.INTEGER
    }
  },{
    timestamps: false
  }
  );
};
