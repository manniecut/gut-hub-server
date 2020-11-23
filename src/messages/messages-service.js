const MessagesService = {
    getAllMessages(knex) {
        return knex
            .select('*')
            .from('messages');
    },
    insertMessage(knex, newMessage) {
        return knex
            .insert(newMessage)
            .into('messages')
            .returning('*')
            .then(rows => {
                return rows[0]
            });
    },
    getById(knex, id) {
        return knex
            .from('messages')
            .select('*')
            .where('id', id)
            .first();
    },
    deleteMessage(knex, id) {
        return knex('message')
            .where({ id })
            .delete();
    },
    updateMessage(knex, id, newMessageFields) {
        return knex('message')
            .where({ id })
            .update(newMessageFields);
    }
}

module.exports = MessagesService;