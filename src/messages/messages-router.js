const express = require('express')
const MessagesService = require('./messages-service')

const messagesRouter = express.Router()
const jsonParser = express.json()


messagesRouter
    .route('/')
    .get((req, res, next) => { // returns all messages from DB
        MessagesService.getAllMessages(req.app.get('db'))
            .then(messages => {
                res.json(messages)
            })
            .catch(next)
    })
    .post(jsonParser, (req, res, next) => { // creates a new message in the DB
        const { sentobject, timesent, sender } = req.body
        const newMessage = { sentobject, sender }
        // if the new message is missing a value, return error
        for (const [key, value] of Object.entries(newMessage)) {
            if (value == null) {
                return res.status(400).json({
                    error: { message: `Missing '${key}' in request body` }
                })
            }
        }
        newMessage.timesent = timesent // timestamp is added after check
        MessagesService.insertMessage( // message is inserted to DB
            req.app.get('db'),
            newMessage
        )
            .then(message => { // response sent to client
                res
                    .status(201)
                    .location(req.originalUrl)
                    .json(message)
            })
            .catch(next)
    })

messagesRouter
    .route('/:messageid')
    .all((req, res, next) => { // retrieves a specific message from the DB
        MessagesService.getById(
            req.app.get('db'),
            req.params.messageid
        )
            .then(message => { // if the message doesn't exist, send error
                if (!message) {
                    return res.status(404).json({
                        error: { message: `Message doesn't exist` }
                    })
                }
                res.message = message
                next()

            })
            .catch(next)
    })
    .get((req, res, next) => {
        res.json(res.message)
    })
    .delete((req, res, next) => { // deletes a specific message from the DB
        MessagesService.deleteMessage(
            req.app.get('db'),
            req.params.messageid
        )
            .then(numRowsAffected => {
                res.status(204).end()
            })
            .catch(next)
    })

module.exports = messagesRouter;