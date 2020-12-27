const RecipesService = {
    // retrieve all recipes from DB
    getAllRecipes(knex) {
        return knex
            .select('*')
            .from('recipes');
    },
    // add recipe to DB
    insertRecipe(knex, newRecipe) {
        return knex
            .insert(newRecipe)
            .into('recipes')
            .returning('*')
            .then(rows => {
                return rows[0]
            });
    },
    // get specific recipe by ID
    getById(knex, id) {
        return knex
            .from('recipes')
            .select('*')
            .where('id', id)
            .first();
    },
    // delete specific recipe by ID
    deleteRecipe(knex, id) {
        return knex('recipes')
            .where({ id })
            .delete();
    },
    // update specific recipe by ID
    updateRecipe(knex, id, newRecipeFields) {
        return knex('recipes')
            .where({ id })
            .update(newRecipeFields);
    }
}

module.exports = RecipesService;