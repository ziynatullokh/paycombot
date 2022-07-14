import { Model, DataTypes } from 'sequelize'

export default async ({ sequelize }) => {
    class Merchant extends Model { }
    
    Merchant.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },

        merchant_name: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        
        merchant_id: {
            type: DataTypes.STRING,
            unique:true
        }


    }, {
        sequelize,
        modelName: 'Merchant',
        tableName: 'merchants',
        updatedAt: 'updated_at',
        createdAt: 'created_at',
        underscored: true
    })
}

