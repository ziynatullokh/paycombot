import { Model, DataTypes } from 'sequelize'

export default async ({ sequelize }) => {
    class Regions extends Model { }
    
    Regions.init({
        name_uz: {
            type: DataTypes.STRING
        },

        name_ru: {
            type: DataTypes.STRING
        },

        electricity_id:{
            type: DataTypes.STRING,
            unique: true
        },
        gas_id:{
            type: DataTypes.STRING
        }


    }, {
        sequelize,
        modelName: 'Regions',
        tableName: 'regions',
        updatedAt: 'updated_at',
        createdAt: 'created_at',
        underscored: true
    })
}

