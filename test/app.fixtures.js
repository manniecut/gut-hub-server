cleanTables = (db) => {
    return db.transaction(transaction =>
        transaction.raw(
            `TRUNCATE
                messages,
                recipes
                `
        )
    )
}

function makeUsersArray() {
    return [
        {
            "id": 1,
            "username": "Mannie",
            "pass": "mannie",
            "joindate": "2020-12-07T00:00:00.000Z",
            "isadmin": true,
            "email": "mannie@mannie",
            "savedrecipes": "1,3",
            "savedcooklists": "",
            "buddylist": "2,3,5",
            "received": "1,2,3,5"
        },
        {
            "id": 2,
            "username": "Angie",
            "pass": "angie",
            "joindate": "2020-12-07T00:00:00.000Z",
            "isadmin": false,
            "email": "angie@angie",
            "savedrecipes": "1,3,2,3",
            "savedcooklists": "",
            "buddylist": "1",
            "received": "6"
        },
        {
            "id": 3,
            "username": "Steve",
            "pass": "steve",
            "joindate": "2020-12-07T00:00:00.000Z",
            "isadmin": false,
            "email": "steve@steve",
            "savedrecipes": "",
            "savedcooklists": "",
            "buddylist": "",
            "received": "4"
        },
        {
            "id": 4,
            "username": "Guest",
            "pass": "guest",
            "joindate": "2020-12-07T00:00:00.000Z",
            "isadmin": false,
            "email": "guest@guest",
            "savedrecipes": "3,4",
            "savedcooklists": "",
            "buddylist": "2,3,5,6",
            "received": "1,2,3,5"
        },
        {
            "id": 5,
            "username": "Zack",
            "pass": "zack",
            "joindate": "2020-12-07T00:00:00.000Z",
            "isadmin": false,
            "email": "zack@zack",
            "savedrecipes": "",
            "savedcooklists": "",
            "buddylist": "2,3",
            "received": "1,2,3,5"
        },
        {
            "id": 6,
            "username": "Marissa",
            "pass": "marissa",
            "joindate": "2020-12-07T00:00:00.000Z",
            "isadmin": false,
            "email": "marissa@marissa",
            "savedrecipes": "",
            "savedcooklists": "",
            "buddylist": "2,3",
            "received": "1,2,3,5"
        }
    ];
}

function makeRecipesArray() {
    return [
        {
            "id": 1,
            "title": "Beef Stew",
            "adddate": "2020-12-07T00:00:00.000Z",
            "modified": null,
            "recipetype": "Slow Cook",
            "quickdesc": "Easy beef and broccoli",
            "ingredients": "1 1/2 lb. sirloin steak, thinly sliced#\n    1 cup low-sodium beef broth#\n    1/2 c. low-sodium soy sauce#\n    1/2 c. brown sugar#\n    3 tbsp. seasame oil#\n    1 tbsp. sriracha#\n    3 cloves garlic, minced#\n    3 green onions, thinly sliced, plus more for garnish#\n    2 tbsp. cornstarch#\n    2 c. broccoli florets#\n    Seasame seeds, for garnish#\n    Cooked jasmine rice, for serving",
            "directions": "In a large slow-cooker, add steak. Add beef broth, soy sauce, brown sugar, sesame oil, Sriracha, garlic, and green onions.#\n    Cover and cook on low until beef is tender and cooked through, 3 1/2 to 4 hours.#\n    When the steak is tender, spoon a few tablespoons of the slow-cooker broth into a bowl and whisk with cornstarch. Pour into slow cooker and toss with the beef until combined. Add broccoli and cook, covered, 20 minutes more.#\n    Garnish with sesame seeds and green onions and serve over rice.",
            "addtlnotes": "Serve it over white or brown rice, with plenty of Sriracha!",
            "creator": 2
        },
        {
            "id": 2,
            "title": "Slow Cooker Thai Peanut Chicken",
            "adddate": "2020-12-07T00:00:00.000Z",
            "modified": null,
            "recipetype": "Slow Cook",
            "quickdesc": "Creamy, peanut flavor infused chicken served over noodles.",
            "ingredients": "2 cloves garlic minced#\n      2/3 cup peanut butter#\n      1 cup chicken broth#\n      1 lb boneless skinless chicken breasts, cut into 1 inch cubes#\n      1 cup shredded zucchini#\n      1/3 cup soy sauce#\n      1 tsp sugar#\n      1 red pepper cut into thin long strips#\n      1 tbsp lime juice#\n      1 cup chopped cilantro divided#\n      chopped peanuts for garnish#\n      12 ounce linguine noodles cooked and drained",
            "directions": "Add garlic, peanut butter, broth, chicken, zucchini, soy sauce, sugar, and red pepper to slow cooker. Stir to combine.#\n      Cook on low for 4-5 hours or on high for 2-3 hours. A half hour before you are going to serve, add in lime juice and 1/2 cup of cilantro.#\n      Serve over noodles and garnish with remaining cilantro and peanuts.",
            "addtlnotes": "Add more peanut butter for a nutty kick!",
            "creator": 2
        },
        {
            "id": 3,
            "title": "Pizza",
            "adddate": "2020-12-07T00:00:00.000Z",
            "modified": null,
            "recipetype": "Bake",
            "quickdesc": "Hearty, zesty main dish with a crisp, golden crust.",
            "ingredients": "1 package (1/4 ounce) active dry yeast#\n      1 teaspoon sugar#\n      1-1/4 cups warm water (110ø to 115ø)#\n      1/4 cup canola oil#\n      1 teaspoon salt#\n      3-1/2 to 4 cups all-purpose flour#\n      1/2 pound ground beef#\n      1 small onion, chopped#\n      1 can (15 ounces) tomato sauce#\n      3 teaspoons dried oregano#\n      1 teaspoon dried basil#\n      1 medium green pepper, diced#\n      2 cups shredded part-skim mozzarella cheese",
            "directions": "In large bowl, dissolve yeast and sugar in water let stand for 5 minutes. Add oil and salt. Stir in flour, 1 cup at a time, until a soft dough forms.#\n        Turn onto floured surface, knead until smooth and elastic, 2-3 minutes. Place in a greased bowl, turning once to grease the top. Cover and let rise in a warm place until doubled, about 45 minutes. Meanwhile, cook beef and onion over medium heat until no longer pink, drain.#\n        Punch down dough, divide in half. Press each into a greased 12-in. pizza pan. Combine the tomato sauce, oregano and basil, spread over each crust. Top with beef mixture, green pepper and cheese.#\n        Bake at 400ø for 25-30 minutes or until crust is lightly browned.",
            "addtlnotes": "Feeling fancy? Layer on toppings like chocolate syrup, sugary cereal or rainbow sprinkles.",
            "creator": 1
        },
        {
            "id": 4,
            "title": "Milkshake",
            "adddate": "2020-12-07T00:00:00.000Z",
            "modified": null,
            "recipetype": "Blender",
            "quickdesc": "Milkshakes are one of the most iconic American desserts.",
            "ingredients": "1/3 cup Milk#\n        1 1/2 cups Ice Cream#\n        Anything to mix in",
            "directions": "Send your ingredients straight to the blender. For best results, put in your milk first. That will get the blender mixing quickly. Be sure to let your ice cream soften before scooping. If it\\\"s too hard, you might end up having to add more milk, which thins the shake.#\n        It\\\"s time to blend away. You\\\"ll want to keep an eye on the consistency. This recipe should be not too firm and not too soft (runny). Of course, you can always customize it either way. Use less milk for a thicker, spoonable shake and more for a thinner, sippable one.#\n        Pour your milkshake into a chilled glass to serve. It tastes great straight-up or topped with a tower of whipped cream.",
            "addtlnotes": "Feeling fancy? Layer on toppings like chocolate syrup, sugary cereal or rainbow sprinkles.",
            "creator": 1
        },
    ]
}

function makeMessagesArray() {
    return [
        {
            "id": 1,
            "sentobject": "/recipes/3",
            "timesent": "2020-12-07T00:00:00.000Z",
            "sender": 2
        },
        {
            "id": 2,
            "sentobject": "/recipes/2",
            "timesent": "2020-12-07T00:00:00.000Z",
            "sender": 2
        },
        {
            "id": 3,
            "sentobject": "/recipes/2",
            "timesent": "2020-12-07T00:00:00.000Z",
            "sender": 3
        },
        {
            "id": 4,
            "sentobject": "/recipes/1",
            "timesent": "2020-12-07T00:00:00.000Z",
            "sender": 1
        },
        {
            "id": 5,
            "sentobject": "/cooklists/3",
            "timesent": "2020-12-07T00:00:00.000Z",
            "sender": 2
        },
        {
            "id": 6,
            "sentobject": "/recipes/1",
            "timesent": "2020-12-07T00:00:00.000Z",
            "sender": 1
        }
    ];
}


seedTables = (db, users, recipes, messages) => {

    return db.transaction(async trx => {

        if (users.length > 0) {
            await trx.into('users').insert(users);
        };

        if (recipes.length > 0) {
            await trx.into('recipes').insert(recipes);
        };

        if (messages.length > 0) {
            await trx.into('messages').insert(messages);
        };
    });
}

makeFixtures = () => {
    const testUsers = makeUsersArray();
    const testRecipes = makeRecipesArray();
    const testMessages = makeMessagesArray();
    return { testUsers, testRecipes, testMessages };
}



function randomUser() {
    const index = Math.floor(Math.random() * makeUsersArray().length);
    return makeUsersArray()[index];
}

function randomRecipe() {
    const index = Math.floor(Math.random() * makeRecipesArray().length);
    return makeRecipesArray()[index];
}

function randomMessage() {
    const index = Math.floor(Math.random() * makeMessagesArray().length);
    return makeMessagesArray()[index];
}

module.exports = {
    makeFixtures,
    cleanTables,
    seedTables,

    makeUsersArray,
    makeRecipesArray,
    makeMessagesArray,

    randomUser,
    randomRecipe,
    randomMessage
}