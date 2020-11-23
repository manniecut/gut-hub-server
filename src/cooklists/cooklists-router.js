const path = require('path')
const express = require('express')
const xss = require('xss')
const CooklistsService = require('./Cooklists-service')

const cooklistsRouter = express.Router()
const jsonParser = express.json()

const sterlizeCooklist = cooklist => ({
    id: cooklist.id,
    title: xss(cooklist.title),
    creator: cooklist.creator,
    modified: cooklist.modified,
    recipeids: cooklist.recipeids
})

cooklistsRouter
.route('/')

cooklistsRouter
.route('/:recipeid')

module.exports = cooklistsRouter