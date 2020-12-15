# GutHub - Server

## Description

This is the API utilized by the GutHub app. It is built around a PostgreSQL database.

## Table of contents

*  [Set up](#set-up)
*  [Technologies](#technologies)
*  [Endpoints](#endpoints)
*  [Scripts](#scripts)
*  [Deploying](#deploying)

## Set up

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`

## Technologies

- **JS ES6**
- **Node**
- **Express**
- **PostgreSQL**

## Endpoints

### Users:
 - GET `/api/users`
 - POST `/api/users`
 - GET `/api/users/:id`
 - PATCH `/api/users/:id`
 - DELETE `/api/users/:id`
### Recipes:
 - GET `/api/recipes`
 - POST `/api/recipes`
 - GET `/api/recipes/:id`
 - PATCH `/api/recipes/:id`
 - DELETE `/api/recipes/:id`
### Messages:
 - GET `/api/messages`
 - POST `/api/messages`
 - GET `/api/messages/:id`
 - DELETE `/api/messages/:id`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

Run tests and continue watching `npm watch`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
