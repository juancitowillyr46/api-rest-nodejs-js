const userModel = require('./users.model');
const bcrypt = require('bcryptjs');

exports.userAll = async (body) => {
    let findModel = await userModel.find({});
    return {
        isValid: true, 
        data: findModel, 
        message: `User List successfull dddd!`,
        statusCode: 200
    };;
}

exports.userGetById = async (id) => {
    let findModel = await userModel.findById(id);
    return {
        isValid: true, 
        data: findModel, 
        message: `User Get successfull!`,
        statusCode: 200
    };;
}

exports.userPost = async (body) => {

    let userDTO = {
        email: body.email,
        username: body.userName,
        password: body.password,
        firstname: body.firstName,
        lastname: body.lastname
    };


    // Validate Duplicate
    let findUser = await userModel.findOne({"email": userDTO.email});

    if(!findUser) {
        // Security
        const salt = await bcrypt.genSalt(10);
        userDTO.password = await bcrypt.hash(body.password, salt);

        const newUser = new userModel(userDTO);
        return await newUser.save().then(user => {
            return {
                isValid: true, 
                data: user, 
                message: `User created successfull!`,
                statusCode: 200
            };
        }).catch(err => {
            return {
                isValid: false, 
                data: null, 
                message: err.message,
                statusCode: 400
            };
        });
    }

    return {
        isValid: false, 
        data: null, 
        message: `User register!`,
        statusCode: 401
    };



    

    // let user = await newUser.save();
    // if(user !== null) {
    //     return {
    //         isValid: true, 
    //         data: user, 
    //         message: `User created successfull!`,
    //         statusCode: 200
    //     };
    // } else {
    //     return {
    //         isValid: false, 
    //         data: null, 
    //         message: `Error to created User successfull!`,
    //         statusCode: 400
    //     };
    // }
    
 
}

exports.userPut = async (id, body) => {

    let findModel = await userModel.findByIdAndUpdate(id, body);
    
    return {
        isValid: true, 
        data: findModel, 
        message: `User Updated successfull!`,
        statusCode: 200
    };;

    // const newUser = new userModel(body);
    // return await newUser.save().then(user => {
    //     return {
    //         isValid: true, 
    //         data: user, 
    //         message: `User Updated successfull!`,
    //         statusCode: 200
    //     };
    // }).catch(err => {
    //     return {
    //         isValid: false, 
    //         data: null, 
    //         message: `Error to created User successfull!`,
    //         statusCode: 400
    //     };
    // });
 
}

exports.userDelete = async (id) => {
    let findModel = await userModel.findByIdAndRemove(id);
    return {
        isValid: true, 
        data: null, 
        message: `User Delete successfull!`,
        statusCode: 200
    };;
}