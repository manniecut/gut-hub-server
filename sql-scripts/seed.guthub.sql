BEGIN;
TRUNCATE recipes,
cooklists,
messages,
users RESTART IDENTITY CASCADE;
INSERT INTO users (
    username,
    pass,
    email,
    received,
    buddylist,
    isadmin
  )
VALUES (
    'Mannie',
    'mannie',
    'mannie@mannie',
    '1,2,3,5',
    '2,3',
    TRUE
  ),
  ('Angie', 'angie', 'angie@angie', '6', '1', FALSE),
  (
    'Steve',
    'steve',
    'steve@steve',
    '4',
    null,
    FALSE
  ),
  (
    'Guest',
    'guest',
    'guest@guest',
    '1,2,3,5',
    '2,3,5,6',
    FALSE
  ),
  (
    'Zack',
    'zack',
    'marissa@marissa',
    '1,2,3,5',
    '2,3',
    FALSE
  ),
  (
    'Marissa',
    'marissa',
    'marissa@marissa',
    '1,2,3,5',
    '2,3',
    FALSE
  );
INSERT INTO recipes (
    title,
    creator,
    recipetype,
    quickdesc,
    ingredients,
    directions,
    addtlnotes
  )
VALUES (
    'Beef Stew',
    2,
    'Slow Cook',
    'Yummy Beef Stew',
    '{"1":"1 Beef","2":"2 Stew"}',
    '{"1":"Prepare Ingredients","2":"Put in Cooker","3":"Let it cook slow"}',
    null
  ),
  (
    'Simple Salad',
    1,
    'Salad',
    'Yummy Salad',
    '{"1":"1 Onion","2":"2 Tomato","3":"1 Cucumber","4":"Olive Oil","5":"Vinegar"}',
    '{"1":"Prepare Ingredients","2":"Put in bowl","3":"Mix it up!"}',
    null
  ),
  (
    'Pizza',
    3,
    'Bake',
    'Yummy Pizza',
    '{"1":"Dough","2":"Cheese","3":"Sauce","4":"Pepperoni"}',
    '{"1":"Prepare Ingredients","2":"Put in Oven","3":"Let it bake!"}',
    null
  ),
  (
    'Milkshake',
    2,
    'Blender',
    'Yummy Milkshake',
    '{"1":"Milk","2":"Shake"}',
    '{"1": "Prepare Ingredients","2":"Put in Blender","3":"Blend it good!"}',
    null
  ),
  (
    'Epic Brownies',
    2,
    'Bake',
    'These brownies are almost fudge',
    '{"1":"1 1/2 cups granulated sugar",
    "2":"3/4 cup all-purpose flour",
    "3":"2/3 cup cocoa powder, sifted if lumpy",
    "4":"1/2 cup powdered sugar, sifted if lumpy",
    "5":"1/2 cup dark chocolate chips",
    "6":"3/4 teaspoons sea salt",
    "7":"2 large eggs",
    "8":"1/2 cup canola oil or extra-virgin olive oil",
    "9":"2 tablespoons water",
    "10":"1/2 teaspoon vanilla"}',
    '{"1":"Preheat the oven to 325°F. Lightly spray an 8x8 baking dish (not a 9x9 dish or your brownies will overcook) with cooking spray and line it with parchment paper. Spray the parchment paper.",
    "2":"In a medium bowl, combine the sugar, flour, cocoa powder, powdered sugar, chocolate chips, and salt.",
    "3":"In a large bowl, whisk together the eggs, olive oil, water, and vanilla.",
    "4":"Sprinkle the dry mix over the wet mix and stir until just combined.",
    "5":"Pour the batter into the prepared pan (itll be thick - thats ok) and use a spatula to smooth the top. Bake for 40 to 48 minutes, or until a toothpick comes out with only a few crumbs attached (note: its better to pull the brownies out early than to leave them in too long). Cool completely before slicing.*** Store in an airtight container at room temperature for up to 3 days. These also freeze well!"}',
    'When these brownies come out of the oven, theyll be super gooey in the middle. Allow them to cool completely, about 2 hours, before you slice into them to give them a chance to set up. Theyll continue to firm up the longer theyre out of the oven. If you still prefer a firmer brownie, store them in the fridge.'
  );
INSERT INTO cooklists (title, quickdesc, recipeids, creator)
VALUES (
    'Camping Recipes',
    'Great Camping Recipes',
    '1,3',
    3
  ),
  (
    'Weekly Recipes',
    'Great Weekly Recipes',
    '2,3',
    1
  ),
  ('Desserts', 'Great Dessert Recipes', '4', 2),
  (
    'Holiday Recipes',
    'Great Holiday Recipes',
    '3,4',
    1
  );
INSERT INTO messages (sentobject, sender)
VALUES ('/recipes/3', 2),
  ('/recipes/2', 2),
  ('/recipes/2', 3),
  ('/recipes/1', 1),
  ('/cooklists/3', 2),
  ('/recipes/1', 1);
COMMIT;