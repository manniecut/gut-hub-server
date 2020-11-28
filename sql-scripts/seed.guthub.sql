BEGIN;

TRUNCATE recipes, cooklists, messages, users RESTART IDENTITY CASCADE;

INSERT INTO users
  (username, pass, email, received, isadmin)
  VALUES
    ('mannie', 'mannie', 'mannie@mannie', '[1, 2, 3, 5]', TRUE),
    ('angie', 'angie', 'angie@angie', '[6]', FALSE),
    ('steve', 'steve', 'steve@steve', '[4]', FALSE);

-- insert 4 departments
INSERT INTO recipes
  (title, creator, recipetype, quickdesc, ingredients, directions)
  VALUES
    ('Beef Stew', 2, 'Slow Cook', 'Yummy Beef Stew','[1 Beef, 2 Stew]', '[1: Prepare Ingredients, 2: Put in Cooker, 3: Let it cook slow'),
    ('Simple Salad', 1, 'Salad', 'Yummy Salad','[1: 1 Onion, 2: 2 Tomato, 3: 1 Cucumber, 4: Olive Oil, 5: Vinegar]', '[1: Prepare Ingredients, 2: Put in bowl, 3: Mix it up!'),
    ('Pizza', 3, 'Bake', 'Yummy Pizza','[Dough, Cheese, Sauce, Pepperoni]', '[1: Prepare Ingredients, 2: Put in Oven, 3: Let it bake!'),
    ('Milkshake', 2, 'Blender', 'Yummy Milkshake','[1 Milk, 2 Shake]', '[1: Prepare Ingredients, 2: Put in Blender, 3: Blend it good!');

INSERT INTO cooklists
  (title, quickdesc, recipeids, creator)
  VALUES
    ('Camping Recipes', 'Great Camping Recipes', '[1, 3]', 3),
    ('Weekly Recipes', 'Great Weekly Recipes', '[2, 3]', 1),
    ('Desserts', 'Great Dessert Recipes', '[4]', 2),
    ('Holiday Recipes', 'Great Holiday Recipes', '[3, 4]', 1);


INSERT INTO messages
  (sentobject, sender)
  VALUES
    ('/recipes/3', 2),
    ('/recipes/2', 2),
    ('/recipes/2', 3),
    ('/recipes/1', 1),
    ('/cooklists/3', 2),
    ('/recipes/1', 1);
    
COMMIT;