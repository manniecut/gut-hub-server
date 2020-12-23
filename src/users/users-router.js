const path = require('path')
const express = require('express')
const xss = require('xss')
const UsersService = require('./users-service')

const usersRouter = express.Router()
const jsonParser = express.json()

const sterlizeUser = user => ({
    id: user.id,
    username: xss(user.username),
    pass: user.pass,
    joindate: user.joindate,
    isadmin: user.isadmin,
    email: user.email,
    savedrecipes: user.savedrecipes,
    savedcooklists: user.savedcooklists,
    buddylist: user.buddylist,
    received: user.received
})

// This function removes the password from the users response.
const secureResponse = (users) => {
    secureUsers = []
    users = users.forEach(user => {
        delete user.pass
        secureUsers.push(user)
    })
    return secureUsers
}

usersRouter
    .route('/')
    .get((req, res, next) => {
        UsersService.getAllUsers(req.app.get('db'))
            .then(users => {
                res.json(secureResponse(users))
            })
            .catch(next)
    })
    .post(jsonParser, (req, res, next) => {
        const { username, pass, email } = req.body
        const newUser = { username, pass }
        for (const [key, value] of Object.entries(newUser)) {
            if (value == null) {
                return res.status(400).json({
                    error: { message: `Missing '${key}' in request body` }
                })
            }
        }
        newUser.email = email
        UsersService.insertUser(
            req.app.get('db'),
            newUser
        )
            .then(user => {
                res
                    .status(201)
                    .location(`/`)
                    .json(sterlizeUser(user))
            })
            .catch(next)
    })

usersRouter
    .route('/:userid')
    .all((req, res, next) => {
        UsersService.getById(
            req.app.get('db'),
            req.params.userid
        )
            .then(user => {
                if (!user) {
                    return res.status(404).json({
                        error: { message: `User doesn't exist` }
                    })
                }
                res.user = user
                next()
            })
            .catch(next)
    })
    .get((req, res, next) => {
        res.json(sterlizeUser(res.user))
    })
    .delete((req, res, next) => {
        UsersService.deleteUser(
            req.app.get('db'),
            req.params.userid
        )
            .then(numRowsAffected => {
                res.status(204).end()
            })
            .catch(next)
    })
    .patch(jsonParser, (req, res, next) => {
        const { username, pass, email, savedrecipes, savedcooklists, buddylist, received } = req.body
        const userToUpdate = { username, pass, email, savedrecipes, savedcooklists, buddylist, received }
        if (!userToUpdate)
            return res.status(400).json({
                error: {
                    message: `Nothing to update`
                }
            })
        UsersService.updateUser(
            req.app.get('db'),
            req.params.userid,
            userToUpdate
        )
            .then(numRowsAffected => {
                res.status(204).end()
            })
            .catch(next)
    })


module.exports = usersRouter;