import { Model, DataTypes } from 'sequelize'

export default async ({ sequelize }) => {
    class Wallets extends Model { }
    
    Wallets.init({
        user_id: {
            type: DataTypes.BIGINT
        },
        wallet_type: {
            type: DataTypes.STRING
        },
        wallet_account:{
            type: DataTypes.STRING
        },
        wallet_region:{
            type: DataTypes.STRING
        },
        wallet_sub_region:{
            type: DataTypes.STRING
        },
        wallet_merchant_id:{
            type: DataTypes.STRING
        },
        wallet_pay_type:{
            type: DataTypes.STRING
        },
        wallet_last_balance:{
            type: DataTypes.STRING
        }
        

       

    }, {
        sequelize,
        modelName: 'Wallets',
        tableName: 'wallets',
        updatedAt: 'updated_at',
        createdAt: 'created_at',
        underscored: true
    })
}

