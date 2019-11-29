const mongoose = require('mongoose');

exports.connectionDB = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/apirest', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    mongoose.connection.once('open', () => {
        console.log(`Database Connection Start`);
    }).on('Error', (error) => {
        console.log(`Connection error:` + error);
    });

    return mongoose;
};