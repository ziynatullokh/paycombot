import { Model, DataTypes } from 'sequelize'

export default async ({ sequelize }) => {
    class User extends Model { }
    
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },

        user_id: {
            type: DataTypes.BIGINT,
            primaryKey: true
        },

        session: {
            type: DataTypes.STRING,
            defaultValue: 'selectLanguage'
        },

        msgtime: {
            type: DataTypes.BIGINT
        },

        msgid: {
            type: DataTypes.BIGINT
        },

        language: {
            type: DataTypes.STRING,
            defaultValue: 'default'
        },

        userDataView:{
            type:DataTypes.BOOLEAN,
            defaultValue: true
        },

        phone: {
            type: DataTypes.STRING
        }

       

    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        updatedAt: 'updated_at',
        createdAt: 'created_at',
        underscored: true
    })
}

