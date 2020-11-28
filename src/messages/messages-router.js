const path = require('path')
const express = require('express')
const xss = require('xss')
const MessagesService = require('./messages-service')

const messagesRouter = express.Router()
const jsonParser = express.json()

const sterlizeCooklist = cooklist => ({
    id: cooklist.id,
    title: xss(cooklist.title),
    creator: cooklist.creator,
    modified: cooklist.modified,
    quickdesc: xss(cooklist.quickdesc),
    recipeids: cooklist.recipeids
})

messagesRouter
    .route('/')

messagesRouter
    .route('/:recipeid')

module.exports = messagesRouter;