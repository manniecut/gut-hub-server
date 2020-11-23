const path = require('path')
const express = require('express')
const xss = require('xss')
const RecipesService = require('./recipes-service')

const recipesRouter = express.Router()
const jsonParser = express.json()

const sterlizeRecipe = recipe => ({
    id: recipe.id,
    title: xss(recipe.title),
    creator: recipe.creator,
    modfied: recipe.modified,
    method: recipe.method,
    quickdesc: xss(recipe.quickdesc),
    ingredients: recipe.ingredients
})

recipesRouter
    .route('/')

recipesRouter
    .route('/:recipeid')


module.exports = recipesRouter;