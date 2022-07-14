import { Model, DataTypes } from 'sequelize'

export default async ({ sequelize }) => {
    class OrderPayCommunal extends Model { }
    
    OrderPayCommunal.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        order_user_id:{
            type: DataTypes.BIGINT
        },

        order_type: {
            type: DataTypes.STRING,
        },

        order_chek: {
            type: DataTypes.STRING,
        },

        order_region: {
            type: DataTypes.STRING
        },
        
        order_subregion: {
            type: DataTypes.STRING
        },

        order_account: {
            type: DataTypes.STRING,
        },

        order_amount: {
            type: DataTypes.STRING,
        },

        order_cardnumber: {
            type: DataTypes.STRING
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
        },
        order_name: {
            type: DataTypes.STRING
        }

       
    }, {
        sequelize,
        modelName: 'OrderPayCommunal',
        tableName: 'orderspaycommunal',
        updatedAt: 'updated_at',
        createdAt: 'created_at',
        underscored: true
    })
}

