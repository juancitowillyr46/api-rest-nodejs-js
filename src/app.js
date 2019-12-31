const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const authService = require('./components/users/users.services');
const jwt = require('jsonwebtoken');

// Config
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Routing
const routes = require('./routes');
const authRoutes = require('./components/auth/auth.routes');

app.use('/api/', authRoutes);

app.use('/api/', (req, res, next) => {
    console.log(req.headers.authorization);
    console.log('Entrando...');
    if(!req.headers.authorization) {
        return res.status(403).json({ message: 'Not authorized' });
    }

    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, 'R6EkcHsmA8V4vcHg', (err, payload) => {
        if (err) {
            return res.status(401).json({ message: err.message });
        } else {
            // const user = authService.userGetById(payload.sub);
            console.log(payload);
            return next();
        }
    });

    // console.log(token);
    // next();
    // try {
    //     if (token) {
            
    //     } else {
            
    //     }
    // } catch (err) {
    //     return res.status(500).json({ message: err.message });
    // }

    
}, routes);

// Welcome
app.get('/', (req, res) => {
    return res.send(`Api RESTful Users admin`);
});

app.get('/api/', (req, res) => {
    return res.send(`Api RESTful Users`);
});


module.exports = app;