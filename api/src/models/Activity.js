const { DataTypes } = require("sequelize")

module.exports = sequelize => {
    sequelize.define("activity",{
        // id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true
        // },
        nombre:{
            type: DataTypes.STRING
        },
        dificultad: {
            type: DataTypes.INTEGER,
            validate: {
                min: 1,
                max: 5
            }
        },
        duracion: {
            type: DataTypes.INTEGER,
            get(){
                return `Hora/s: ${this.getDataValue("duracion")}`
            }
        },
        temporada: {
            type: DataTypes.ENUM( "Verano","Otoño", "Invierno","Primavera"),
            defaultValue: "Verano",
        }
    }, {
        timestamps: false
    })
}