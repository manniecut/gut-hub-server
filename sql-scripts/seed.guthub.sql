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
    'Easy beef and broccoli',
    '{"1":"1 1/2 lb. sirloin steak, thinly sliced",
    "2":"1 cup low-sodium beef broth",
    "3":"1/2 c. low-sodium soy sauce",
    "4":"1/2 c. brown sugar",
    "5":"3 tbsp. seasame oil",
    "6":"1 tbsp. sriracha",
    "7":"3 cloves garlic, minced",
    "8":"3 green onions, thinly sliced, plus more for garnish",
    "9":"2 tbsp. cornstarch",
    "10":"2 c. broccoli florets",
    "11":"Seasame seeds, for garnish",
    "12":"Cooked jasmine rice, for serving"}',
    '{"1":"In a large slow-cooker, add steak. Add beef broth, soy sauce, brown sugar, sesame oil, Sriracha, garlic, and green onions.",
    "2":"Cover and cook on low until beef is tender and cooked through, 3 1/2 to 4 hours.",
    "3":"When the steak is tender, spoon a few tablespoons of the slow-cooker broth into a bowl and whisk with cornstarch. Pour into slow cooker and toss with the beef until combined. Add broccoli and cook, covered, 20 minutes more.",
    "4":"Garnish with sesame seeds and green onions and serve over rice."}',
    'Serve it over white or brown rice, with plenty of Sriracha!'
  ),
  (
    'Slow Cooker Thai Peanut Chicken',
    2,
    'Slow Cook',
    'Creamy, peanut flavor infused chicken served over noodles.',
    '{"1":"2 cloves garlic minced",
   "2":"2/3 cup peanut butter",
   "3":"1 cup chicken broth",
   "4":"1 lb boneless skinless chicken breasts, cut into 1 inch cubes",
   "5":"1 cup shredded zucchini",
   "6":"1/3 cup soy sauce",
   "7":"1 tsp sugar",
   "8":"1 red pepper cut into thin long strips",
   "9":"1 tbsp lime juice",
   "10":"1 cup chopped cilantro divided",
   "11":"chopped peanuts for garnish",
   "12":"12 ounce linguine noodles cooked and drained"}',
    '{"1":"Add garlic, peanut butter, broth, chicken, zucchini, soy sauce, sugar, and red pepper to slow cooker. Stir to combine.",
   "2":"Cook on low for 4-5 hours or on high for 2-3 hours. A half hour before you are going to serve, add in lime juice and 1/2 cup of cilantro.",
   "3":"Serve over noodles and garnish with remaining cilantro and peanuts."}',
    'Add more peanut butter for a nutty kick!'
  ),
  (
    'Pizza',
    1,
    'Bake',
    'Hearty, zesty main dish with a crisp, golden crust.',
    '{"1":"1 package (1/4 ounce) active dry yeast",
   "2":"1 teaspoon sugar",
   "3":"1-1/4 cups warm water (110° to 115°)",
   "4":"1/4 cup canola oil",
   "5":"1 teaspoon salt",
   "6":"3-1/2 to 4 cups all-purpose flour",
   "7":"1/2 pound ground beef",
   "8":"1 small onion, chopped",
   "9":"1 can (15 ounces) tomato sauce",
   "10":"3 teaspoons dried oregano",
   "11":"1 teaspoon dried basil",
   "12":"1 medium green pepper, diced",
   "13":"2 cups shredded part-skim mozzarella cheese"}',
    '{"1":"In large bowl, dissolve yeast and sugar in water let stand for 5 minutes. Add oil and salt. Stir in flour, 1 cup at a time, until a soft dough forms.",
    "2":"Turn onto floured surface, knead until smooth and elastic, 2-3 minutes. Place in a greased bowl, turning once to grease the top. Cover and let rise in a warm place until doubled, about 45 minutes. Meanwhile, cook beef and onion over medium heat until no longer pink, drain.",
    "3":"Punch down dough, divide in half. Press each into a greased 12-in. pizza pan. Combine the tomato sauce, oregano and basil, spread over each crust. Top with beef mixture, green pepper and cheese.",
    "4":"Bake at 400° for 25-30 minutes or until crust is lightly browned."}',
    'Feeling fancy? Layer on toppings like chocolate syrup, sugary cereal or rainbow sprinkles.'
  ),
  (
    'Milkshake',
    1,
    'Blender',
    'Milkshakes are one of the most iconic American desserts.',
    '{"1":"1/3 cup Milk",
    "2":"1 1/2 cups Ice Cream",
    "3":"Anything to mix in"}',
    '{"1": "Send your ingredients straight to the blender. For best results, put in your milk first. That will get the blender mixing quickly. Be sure to let your ice cream soften before scooping. If it\"s too hard, you might end up having to add more milk, which thins the shake.",
    "2":"It\"s time to blend away. You\"ll want to keep an eye on the consistency. This recipe should be not too firm and not too soft (runny). Of course, you can always customize it either way. Use less milk for a thicker, spoonable shake and more for a thinner, sippable one.",
    "3":"Pour your milkshake into a chilled glass to serve. It tastes great straight-up or topped with a tower of whipped cream."}',
    'Feeling fancy? Layer on toppings like chocolate syrup, sugary cereal or rainbow sprinkles.'
  ),
  (
    'Epic Brownies',
    2,
    'Bake',
    'These brownies are almost fudge.',
    '{"1":"1 1/2 cups granulated sugar","2":"3/4 cup all-purpose flour","3":"2/3 cup cocoa powder, sifted if lumpy","4":"1/2 cup powdered sugar, sifted if lumpy","5":"1/2 cup dark chocolate chips","6":"3/4 teaspoons sea salt","7":"2 large eggs","8":"1/2 cup canola oil or extra-virgin olive oil","9":"2 tablespoons water","10":"1/2 teaspoon vanilla"}',
    '{"1":"Preheat the oven to 325°F. Lightly spray an 8x8 baking dish (not a 9x9 dish or your brownies will overcook) with cooking spray and line it with parchment paper. Spray the parchment paper.","2":"In a medium bowl, combine the sugar, flour, cocoa powder, powdered sugar, chocolate chips, and salt.","3":"In a large bowl, whisk together the eggs, olive oil, water, and vanilla.","4":"Sprinkle the dry mix over the wet mix and stir until just combined.","5":"Pour the batter into the prepared pan (itll be thick - thats ok) and use a spatula to smooth the top. Bake for 40 to 48 minutes, or until a toothpick comes out with only a few crumbs attached (note: its better to pull the brownies out early than to leave them in too long). Cool completely before slicing.*** Store in an airtight container at room temperature for up to 3 days. These also freeze well!"}',
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
  (
    'Desserts',
    'Great Dessert Recipes',
    '4',
    2
  ),
  (
    'Holiday Recipes',
    'Great Holiday Recipes',
    '4,5',
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