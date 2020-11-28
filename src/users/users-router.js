const path = require('path')
const express = require('express')
const xss = require('xss')
const UsersService = require('./users-service')

const usersRouter = express.Router()
const jsonParser = express.json()

const sterlizeCooklist = cooklist => ({
    id: cooklist.id,
    title: xss(cooklist.title),
    creator: cooklist.creator,
    modified: cooklist.modified,
    quickdesc: xss(cooklist.quickdesc),
    recipeids: cooklist.recipeids
})

usersRouter
    .route('/')

usersRouter
    .route('/:recipeid')

module.exports = usersRouter