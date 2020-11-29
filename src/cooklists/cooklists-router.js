const path = require('path')
const express = require('express')
const xss = require('xss')
const CooklistsService = require('./cooklists-service')

const cooklistsRouter = express.Router()
const jsonParser = express.json()

const sterlizeCooklist = cooklist => ({
    id: cooklist.id,
    title: xss(cooklist.title),
    collaborators: cooklist.collaborators,
    modified: cooklist.modified,
    quickdesc: xss(cooklist.quickdesc),
    recipeids: cooklist.recipeids,
    creator: cooklist.creator,
})

cooklistsRouter
    .route('/')
    .get((req, res, next) => {
        CooklistsService.getAllCooklists(req.app.get('db'))
            .then(cooklists => {
                res.json(cooklists)
            })
            .catch(next)
    })
    .post(jsonParser, (req, res, next) => {
        const { title, quickdesc, recipeids, modified, creator } = req.body
        const newCookList = { title, quickdesc, recipeids, creator }
        for (const [key, value] of Object.entries(newCookList)) {
            if (value == null) {
                return res.status(400).json({
                    error: { message: `Missing ${key} in request` }
                })
            }
        }
        newCookList.modified = modified
        CooklistsService.insertCooklist(
            req.app.get('db'),
            newCookList
        )
            .then(cooklist => {
                res
                    .status(201)
                    .location(req.originalUrl)
                    .json(cooklist)
            })
            .catch(next)


    })

cooklistsRouter
    .route('/:cooklistid')
    .all((req, res, next) => {
        CooklistsService.getById(
            req.app.get('db'),
            req.params.cooklistid
        )
            .then(cooklist => {
                if (!cooklist) {
                    return res.status(404).json({
                        error: { message: `Cooklist doesn't exist` }
                    })
                }
                res.note = note
                next()
            })
            .catch(next)
    })
    .get((req, res, next) => {
        res.json(res.cooklist)
    })
    .delete((req, res, next) => {
        CooklistsService.deleteCooklist(
            req.app.get('db'),
            req.params.cooklistid
        )
            .then(numRowsAffected => {
                res.status(204).end()
            })
            .catch(next)
    })
    .patch(jsonParser, (req, res, next) => {
        const { title, collaborators, modified, quickdesc, recipeids } = req.body
        const cooklistToUpdate = { title, collaborators, modified, quickdesc, recipeids }
        if (!cooklistToUpdate)
            return res.status(400).json({
                error: {
                    message: `Nothing to update`
                }
            })
        CooklistsService.updateCooklist(
            req.app.get('db'),
            req.params.cooklistid,
            cooklistToUpdate
        )
            .then(numRowsAffected => {
                res.status(204).end()
            })
            .catch(next)
    })


module.exports = cooklistsRouter