# GutHub - Server

## Description

This is the API utilized by the GutHub app. GutHub is a simple recipe sharing app. This API retrieves the necessary data from a databse and relays it to the client.

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

GutHub is a recipe app, it uses this API to access a database of recipes, users, and messages. Each endpoint deals with its own table within the database, and all of the information in the tables works together to create the user's experience. In this section you can find information on what each endpoint does.

### Users:
The users endpoint is used for creating, reading, updating, and deleting users. In GutHub, you cannot do anything without a user account, and the rest of the database is reliant on the users table.
 - GET `/api/users`\
 This endpoint returns a list of all of the users. GutHub is a social app and access to the users table is often needed. NOTE: This does not return user passwords, of course.
 - POST `/api/users`\
 This endpoint is used to create a new user. The account is a vital part of GutHub, and this endpoint is required to create it. 
 - GET `/api/users/:id`\
 This endpoint will return the information of a specific user. The user table contains vital information like the buddylist and saved recipes, which need to be referenced often.
 - PATCH `/api/users/:id`\
 This endpoint is used to update a specfic user's database entry. This endpoint is useful for updating passwords, emails, and even adding a user's received messages to their account.
 - DELETE `/api/users/:id`\
 This endpoint is used to remove a user. Deleting a user will not delete their recipes.
### Recipes:
The recipes endpoint is used for creating, reading, and deleting recipes. Recipes are the main feature of GutHub.
 - GET `/api/recipes`\
 This endpoint will return all of the recipes in the database. Useful for the recipe search page.
 - POST `/api/recipes`\
 This endpoint is used to add a new recipe to the database. Not much of a recipe app without being able to add recipes right?
 - GET `/api/recipes/:id`\
 This endpoint will return a specific recipe. This is used when the client is displaying the full recipe page.
 - DELETE `/api/recipes/:id`\
 This endpoint will delete a specific recipe. Sometimes a recipe just isn't that good. 
### Messages:
The messages endpoint is used for creating, reading, and deleting messages. Messages are an important part of GutHub because they allow you to communicate recipes easily with your co-cookers.
 - GET `/api/messages`\
 This endpoint returns all of the messages in the database. This endpoint is not actually used in the app. There is no personal information within a GutHub message due to GutHub's simplicity.
 - POST `/api/messages`\
 This endpoint will create a new message. This is used when a recipe is being sent.
 - GET `/api/messages/:id`\
 This endpoint will return a specific message. This is used when the client is populating a user's message list.
 - DELETE `/api/messages/:id`\
 This endpoint will delete a specific message. Users can easily clean up their received messages with a delete button in the client.

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

Run tests and continue watching `npm watch`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
