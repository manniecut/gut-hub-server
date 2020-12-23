# GutHub - Server

## Description

This is the API utilized by the GutHub app. It is built around a PostgreSQL database.

## Client
- [GutHub](https://gut-hub.vercel.app/)
- [Client Repository](https://github.com/manniecut/gut-hub)

## Table of contents

*  [Technologies](#technologies)
*  [Endpoints](#endpoints)
*  [Scripts](#scripts)
*  [Deploying](#deploying)

## Technologies

- **JS ES6**
- **Node**
- **Express**
- **PostgreSQL**

## Endpoints

### Users:
The users endpoint is used for creating, reading, updating, and deleting users.
 - GET `/api/users`
 This endpoint returns a list of all of the users.
 - POST `/api/users`
 This endpoint is used to create a new user.
 - GET `/api/users/:id`
 This endpoint will return the information of a specific user.
 - PATCH `/api/users/:id`
 This endpoint is used to update a specfic user's database entry.
 - DELETE `/api/users/:id`
 This endpoint is used to remove a user.
### Recipes:
 - GET `/api/recipes`
 This endpoint will return all of the recipes in the database.
 - POST `/api/recipes`
 This endpoint is used to add a new recipe to the database.
 - GET `/api/recipes/:id`
 This endpoint will return a specific recipe.
 - DELETE `/api/recipes/:id`
 This endpoint will delete a specific recipe.
### Messages:
 - GET `/api/messages`
 This endpoint returns all of the messages in the database.
 - POST `/api/messages`
 This endpoint will create a new message.
 - GET `/api/messages/:id`
 This endpoint will return a specific message.
 - DELETE `/api/messages/:id`
 This endpoint will delete a specific message.

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

Run tests and continue watching `npm watch`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
