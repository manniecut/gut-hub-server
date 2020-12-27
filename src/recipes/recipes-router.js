const path = require('path')
const express = require('express')
const xss = require('xss')
const RecipesService = require('./recipes-service')

const recipesRouter = express.Router()
const jsonParser = express.json()

// sterilizing any inputs that could cause trouble
const sterilizeRecipe = recipe => ({
    id: recipe.id,
    title: xss(recipe.title),
    adddate: recipe.adddate,
    modified: recipe.modified,
    recipetype: recipe.recipetype,
    quickdesc: xss(recipe.quickdesc),
    ingredients: recipe.ingredients,
    directions: recipe.directions,
    addtlnotes: recipe.addtlnotes,
    creator: recipe.creator,
})

recipesRouter
    .route('/')
    .get((req, res, next) => { // retrieve all recipes from dB
        RecipesService.getAllRecipes(req.app.get('db'))
            .then(recipes => {
                res.json(recipes)
            })
            .catch(next)
    })
    .post(jsonParser, (req, res, next) => { // add a new recipe to DB
        const { title, recipetype, quickdesc, ingredients, directions, addtlnotes, creator } = req.body
        const newRecipe = { title, recipetype, ingredients, directions, creator }
        for (const [key, value] of Object.entries(newRecipe)) { // return error if missing required field
            if (value == null) {
                return res.status(400).json({
                    error: { message: `Needs ${key} in request body` }
                })
            }
        }
        // add non-required fields after check
        newRecipe.quickdesc = quickdesc
        newRecipe.addtlnotes = addtlnotes
        // insert recipe to DB
        RecipesService.insertRecipe(
            req.app.get('db'),
            newRecipe
        )
            .then(recipe => {
                res
                    .status(201)
                    .location(path.posix.join(req.originalUrl, `/${recipe.id}`))
                    .json(sterilizeRecipe(recipe))
            })
            .catch(next)
    })

recipesRouter
    .route('/:recipeid')
    .all((req, res, next) => { // get specific recipe by ID
        RecipesService.getById(
            req.app.get('db'),
            req.params.recipeid
        )
            .then(recipe => {
                if (!recipe) {
                    return res.status(404).json({
                        error: { message: `Recipe doesn't exist` }
                    })
                }
                res.recipe = recipe
                next()
            })
            .catch(next)
    })
    .get((req, res, next) => {
        res.json(res.recipe)
    })
    .delete((req, res, next) => { // delete specific recipe by ID
        RecipesService.deleteRecipe(
            req.app.get('db'),
            req.params.recipeid
        )
            .then(numRowsAffected => {
                res.status(204).end()
            })
            .catch(next)
    })
    .patch(jsonParser, (req, res, next) => { // update specific recipe by ID
        const { title, recipetype, quickdesc, ingredients, directions, addtlnotes } = req.body
        const recipeToUpdate = { title, recipetype, quickdesc, ingredients, directions, addtlnotes }
        // return error if recipe not properly submitted
        if (!recipeToUpdate)
            return res.status(400).json({
                error: {
                    message: `Nothing to update`
                }
            })
        RecipesService.updateRecipe( // update recipe in DB
            req.app.get('db'),
            req.params.recipeid,
            recipeToUpdate
        )
            .then(numRowsAffected => {
                res.status(204).end()
            })
            .catch(next)

    })

module.exports = recipesRouter;