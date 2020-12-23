const LoginService = {

  // Get the user's info from DB
  getUser: (db, username) => {
    return (
      db('users')
        .where({ username })
        .first()
    );
  },

  // Compare passwords
  comparePasswords: (password, dbpass) => {
    if (password === dbpass) {
     return "match"
    } else {
      return "no match"
    }
  }
};

module.exports = LoginService;