require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const recipesRouter = require('./recipes/recipes-router')
const usersRouter = require('./users/users-router')
const messagesRouter = require('./messages/messages-router')
const loginRouter = require('./login/login-router')

const app = express()

const morganOption = (NODE_ENV === 'production')
    ? 'tiny'
    : "common";
app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())


/***** ENDPOINT ROUTING *****/

app.use('/api/recipes', recipesRouter)
app.use('/api/users', usersRouter)
app.use('/api/messages', messagesRouter)
app.use('/api/login', loginRouter)



/***** QUICK DIAGNOSTICS *****/

app.get('/health', (req, res, next) => {
    res.send('Server is active');
})

app.use((error, req, res, next) => {
    console.log("server error:", error.message);
    res.status(error.status || 500).json({ error: error.message, }); next();
});



module.exports = app;