const userModel = require('../users/users.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userService = require('../users/users.services');

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

        const payload = {
            sub: findUser._id,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + Math.floor(parseInt(60000) / 1000),
        };

        token = jwt.sign(payload, 'R6EkcHsmA8V4vcHg', { algorithm: 'HS256' });


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
        data: token, 
        message: `Welcome ${findUser.firstname}`,
        statusCode: 200
    };

    
}


exports.register = async (body) => {
    return await userService.userPost(body);
}