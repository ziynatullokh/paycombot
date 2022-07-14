import { Model, DataTypes } from 'sequelize'

export default async ({ sequelize }) => {
    class Subregion extends Model { }
    
    Subregion.init({
        region_name: {
            type: DataTypes.STRING
        },

        region_code: {
            type: DataTypes.STRING,
            unique:true
        },

        filter:{
            type: DataTypes.STRING
        }

    }, {
        sequelize,
        modelName: 'Subregion',
        tableName: 'subregions',
        updatedAt: 'updated_at',
        createdAt: 'created_at',
        underscored: true
    })
}

