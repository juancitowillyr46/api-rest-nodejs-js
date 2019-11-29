const app = require('./app');
const mongoose = require('./config/mongoose');

app.listen(3000,(error) => {
    if(error) {
        console.log(`Server no start on port 3000`);
        return false;
    }
    mongoose.connectionDB();
    console.log(`Server Start on port 3000`);
});

module.exports = app;