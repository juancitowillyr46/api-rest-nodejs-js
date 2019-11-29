const userModel = require('./users.model');

exports.userAll = async (body) => {
    let findModel = await userModel.find({});
    return {
        isValid: true, 
        data: findModel, 
        message: `User List successfull!`,
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
    const newUser = new userModel(body);
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
            message: `Error to created User successfull!`,
            statusCode: 400
        };
    });
 
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