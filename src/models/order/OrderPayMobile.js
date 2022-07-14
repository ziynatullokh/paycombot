import { Model, DataTypes } from 'sequelize'

export default async ({ sequelize }) => {
    class OrderPayMobile extends Model { }
    
    OrderPayMobile.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        order_user_id:{
            type: DataTypes.BIGINT
        },

        order_chek: {
            type: DataTypes.STRING,
        },

        order_phone_number: {
            type: DataTypes.STRING
        },
        
        order_amount: {
            type: DataTypes.STRING
        },

        order_cardnumber: {
            type: DataTypes.STRING,

        },

        order_cardexpire: {
            type: DataTypes.STRING
        },

        order_msgid: {
            type: DataTypes.BIGINT
        },
        order_merchant:{
            type: DataTypes.STRING
        },
        order_status: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['success','fail','pending','cancel']]
            }
        }



       

    }, {
        sequelize,
        modelName: 'OrderPayMobile',
        tableName: 'orderspaymobile',
        updatedAt: 'updated_at',
        createdAt: 'created_at',
        underscored: true
    })
}

