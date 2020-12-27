const UsersService = {
    // retrieve all users from DB
    getAllUsers(knex) {
        return knex
            .select('*')
            .from('users');
    },
    // insert new user into DB
    insertUser(knex, newUser) {
        return knex
            .insert(newUser)
            .into('users')
            .returning('*')
            .then(rows => {
                return rows[0]
            });
    },
    // retrieve specific user by ID
    getById(knex, id) {
        return knex
            .from('users')
            .select('*')
            .where('id', id)
            .first();
    },
    // delete specific user by ID
    deleteUser(knex, id) {
        return knex('users')
            .where({ id })
            .delete();
    },
    // update specific user by ID
    updateUser(knex, id, newUserFields) {
        return knex('users')
            .where({ id })
            .update(newUserFields);
    }
}

module.exports = UsersService;