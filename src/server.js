const app = require('./app');
const db = require('./config/dbConnection');

app.listen(3000, (error) =>  {
    if(error) {
        console.log(`Server no start`);
        return false;
    }

    db.connectionDB()
    console.log(`Server Start`);
});

module.exports = app;