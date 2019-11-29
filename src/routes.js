const express = require('express');
const app = express();

const usersRoutes = require('./components/users/users.routes');
const routes2 = require('./components/auth/auth.routes');

app.use(usersRoutes);
app.use(routes2);

module.exports = app;