const authService = require('./auth.services');

exports.login = async (req, res) => {
    const operationResult = await authService.login(req.body);
    if(operationResult){
        return res.status(operationResult.statusCode).send(operationResult);
    }
}
