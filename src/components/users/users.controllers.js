const service = require('./users.services');

exports.userGetAll = async (req, res) => {
    const operationResult = await service.userAll(req.body);
    if(operationResult){
        return res.status(operationResult.statusCode).send(operationResult);
    }
}

exports.userGetById = async (req, res) => {
    const operationResult = await service.userGetById(req.params.id);
    if(operationResult){
        return res.status(operationResult.statusCode).send(operationResult);
    }
}

exports.userPost = async (req, res) => {
    const operationResult = await service.userPost(req.body);
    if(operationResult){
        return res.status(operationResult.statusCode).send(operationResult);
    }
}

exports.userPut = async (req, res) => {
    const operationResult = await service.userPut(req.params.id, req.body);
    if(operationResult){
        return res.status(operationResult.statusCode).send(operationResult);
    }
}

exports.userDelete = async (req, res) => {
    const operationResult = await service.userDelete(req.params.id, req.body);
    if(operationResult){
        return res.status(operationResult.statusCode).send(operationResult);
    }
}