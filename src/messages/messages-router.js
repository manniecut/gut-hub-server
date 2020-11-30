const path = require('path')
const express = require('express')
const xss = require('xss')
const MessagesService = require('./messages-service')

const messagesRouter = express.Router()
const jsonParser = express.json()

const sterlizeMessages = message => ({
    id: message.id,
    sentobject: message.sentobject,
    timesent: message.timesent,
    sender: message.sender
})

messagesRouter
    .route('/')
    .get((req, res, next) => {
        MessagesService.getAllMessages(req.app.get('db'))
            .then(messages => {
                res.json(messages)
            })
            .catch(next)
    })
    .post(jsonParser, (req, res, next) => {
        const { sentobject, timesent, sender } = req.body
        const newMessage = { sentobject, sender }
        for (const [key, value] of Object.entries(newMessage)) {
            if (value == null) {
                return res.status(400).json({
                    error: { message: `Missing '${key}' in request body` }
                })
            }
        }
        newMessage.timesent = timesent
        MessagesService.insertMessage(
            req.app.get('db'),
            newMessage
        )
            .then(message => {
                res
                    .status(201)
                    .location(req.originalUrl)
                    .json(message)
            })
            .catch(next)
    })

messagesRouter
    .route('/:messageid')
    .all((req, res, next) => {
        MessagesService.getById(
            req.app.get('db'),
            req.params.messageid
        )
            .then(message => {
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
    .delete((req, res, next) => {
        MessagesService.deleteMessage(
            req.app.get('db'),
            req.app.params.recipeid
        )
            .then(numRowsAffected => {
                res.status(204).end()
            })
            .catch(next)
    })

module.exports = messagesRouter;