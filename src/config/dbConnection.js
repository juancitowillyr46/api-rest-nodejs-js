const mongoose = require('mongoose');

exports.connectionDB = async () => {

    mongoose.Promise = global.Promise;
    await mongoose.connect('mongodb://mongo:27017/docker-node-mongo', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true, // commented out currently
    }).then(
        () => {
            console.log("Database is connected");
        },
    ).catch( err => console.log(err));

    // // mongoose.Promise = global.Promise;
    // mongoose.connect('mongodb://mongo:27018/docker-node-mongo', {
    //     // useCreateIndex: true,
	// 	useNewUrlParser: true,
	// 	// useUnifiedTopology: true, // commented out currently
    // }).then(
    //     () => {
    //         console.log("Database is connected");
    //     },
    // ).catch( err => console.log(err));
    // // mongoose.connection.once('open', () => {
    // //     console.log(`Database Connection Start`);
    // // }).on('Error', (error) => {
    // //     console.log(`Connection error:` + error);
    // // });

    // // return mongoose;
};