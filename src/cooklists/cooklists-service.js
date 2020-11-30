const CooklistsService = {
    getAllCooklists(knex) {
        return knex
            .select('*')
            .from('cooklists');
    },
    insertCooklist(knex, newList) {
        return knex
            .insert(newList)
            .into('cooklists')
            .returning('*')
            .then(rows => {
                return rows[0]
            });
    },
    getById(knex, id) {
        return knex
            .from('cooklists')
            .select('*')
            .where('id', id)
            .first();
    },
    deleteCooklist(knex, id) {
        return knex('cooklists')
            .where({ id })
            .delete();
    },
    updateCooklist(knex, id, newCooklistFields) {
        return knex('cooklists')
            .where({ id })
            .update(newCooklistFields);
    }
}

module.exports = CooklistsService;