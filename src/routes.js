const express = require('express');
const app = express();

const usersRoutes = require('./components/users/users.routes');
const authRoutes = require('./components/auth/auth.routes');

app.use(usersRoutes);
app.use(authRoutes);

module.exports = app;