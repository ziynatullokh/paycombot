import { Model, DataTypes } from 'sequelize'

export default async ({ sequelize }) => {
    class Internet extends Model { }
    
    Internet.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },

        provider_name: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        
        provider_id: {
            type: DataTypes.STRING,
            unique:true
        },
        provider_account_type: {
            type: DataTypes.STRING,
            unique:true
        }


    }, {
        sequelize,
        modelName: 'Internet',
        tableName: 'internets',
        updatedAt: 'updated_at',
        createdAt: 'created_at',
        underscored: true
    })
}

