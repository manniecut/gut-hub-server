const MessagesService = {
    // get all messages from DB
    getAllMessages(knex) {
        return knex
            .select('*')
            .from('messages');
    },
    // add a message to DB
    insertMessage(knex, newMessage) {
        return knex
            .insert(newMessage)
            .into('messages')
            .returning('*')
            .then(rows => {
                return rows[0]
            });
    },
    // get specific message by ID
    getById(knex, id) {
        return knex
            .from('messages')
            .select('*')
            .where('id', id)
            .first();
    },
    // delete specific message by ID
    deleteMessage(knex, id) {
        return knex('messages')
            .where({ id })
            .delete();
    },
    // update a specific message by ID
    updateMessage(knex, id, newMessageFields) {
        return knex('messages')
            .where({ id })
            .update(newMessageFields);
    }
}

module.exports = MessagesService;