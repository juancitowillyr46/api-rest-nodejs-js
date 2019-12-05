const userModel = require('../users/users.model');
const bcrypt = require('bcryptjs');

exports.login = async (body) => {

    const username = body.username;
    const password = body.password;

    let findUser = await userModel.findOne({"username": username});

    if(findUser) {
        
        const comparePassword = await bcrypt.compare(password, findUser.password);

        if(!comparePassword) {
            return {
                isValid: false, 
                data: null, 
                message: `Password Incorrect!`,
                statusCode: 401
            };
        }

    } else {
        return {
            isValid: false, 
            data: null, 
            message: `User not register!`,
            statusCode: 401
        };
    }

    return {
        isValid: true, 
        data: findUser, 
        message: `Welcome ${findUser.firstname}`,
        statusCode: 200
    };

    
}