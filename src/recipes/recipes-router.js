const path = require('path')
const express = require('express')
const xss = require('xss')
const RecipesService = require('./recipes-service')

const recipesRouter = express.Router()
const jsonParser = express.json()

const sterlizeRecipe = recipe => ({
    id: recipe.id,
    title: xss(recipe.title),
    adddate: recipe.adddate,
    modfied: recipe.modified,
    recipetype: recipe.recipetype,
    quickdesc: xss(recipe.quickdesc),
    ingredients: recipe.ingredients,
    directions: recipe.directions,
    addtlnotes: recipe.addtlnotes,
    creator: recipe.creator,
})

recipesRouter
    .route('/')
    .get((req, res, next) => {
        RecipesService.getAllRecipes(req.app.get('db'))
            .then(recipes => {
                res.json(recipes)
            })
            .catch(next)
    })
    .post(jsonParser, (req, res, next) => {
        const { title, recipetype, quickdesc, ingredients, directions, addtlnotes, creator } = req.body
        const newRecipe = { title, recipetype, ingredients, directions, creator }
        for (const [key, value] of Object.entries(newRecipe)) {
            if (value == null) {
                return res.status(400).json({
                    error: { message: `Needs ${key} in request body` }
                })
            }
        }
        newRecipe = {
            quickdesc: quickdesc,
            addtlnotes: addtlnotes
        }
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
    .all((req, res, next) => {
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
    .delete((req, res, next) => {
        RecipesService.deleteRecipe(
            req.app.get('db'),
            req.params.recipeid
        )
            .then(numRowsAffected => {
                res.status(204).end()
            })
            .catch(next)
    })
    .patch(jsonParser, (req, res, next) => {
        const { title, recipetype, quickdesc, ingredients, directions, addtlnotes } = req.body
        const recipeToUpdate = { title, recipetype, quickdesc, ingredients, directions, addtlnotes }
        if (!recipeToUpdate)
            return res.status(400).json({
                error: {
                    message: `Nothing to update`
                }
            })
        RecipesService.updateRecipe(
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