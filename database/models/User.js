modules.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let cols = {
        id: {
            type: dataTypes.INTEGER
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        user_name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        //tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    return User;
        
    }