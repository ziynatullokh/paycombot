import { Model, DataTypes } from 'sequelize'

export default async ({ sequelize }) => {
    class Cards extends Model { }
    
    Cards.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },

        user_id: {
            type: DataTypes.BIGINT,
        },
        card_number: {
            type: DataTypes.STRING,
            primaryKey: true
        },

        card_expire: {
            type: DataTypes.STRING
        }

       

    }, {
        sequelize,
        modelName: 'Cards',
        tableName: 'cards',
        updatedAt: 'updated_at',
        createdAt: 'created_at',
        underscored: true
    })
}

