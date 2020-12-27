const express = require('express');
const LoginService = require('./login-service');

const loginRouter = express.Router();
const jsonParser = express.json();


loginRouter
  .post('/', jsonParser, (req, res, next) => {

    const loginUser = req.body;

    // Verifies both username and password exist
    for (const [key, value] of Object.entries(loginUser)) {
      if (value == null) {
        return (
          res
            .status(400)
            .json({
              error: `Missing '${key}' in request body`
            })
        );
      };
    };

    // retreiving user from DB
    LoginService.getUser(
      req.app.get('db'),
      loginUser.username
    )
      // if no match, return error 
      .then(dbUser => {
        if (!dbUser) {
          return (
            res
              .status(400)
              .json({
                error: 'Incorrect username or password'
              })
          );
        };
        // compare passwords for match
        compare = (LoginService.comparePasswords(loginUser.password, dbUser.pass))
        // if comparison fails, send error  
        if (compare === "no match") {
          return (
            res
              .status(400)
              .json({
                error: 'Incorrect username or password'
              })
          );
        };
        if (compare === "match") {
          return (
            res
              .status(201)
              .json(loginUser.username)
          )
        }
      })
      .catch(next);
  });

module.exports = loginRouter;