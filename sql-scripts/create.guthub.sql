/*DROP****************/
/* ---------------------------------------------------------------------- */
/* Drop foreign key constraints                                           */
/* ---------------------------------------------------------------------- */
ALTER TABLE users DROP CONSTRAINT recipes_users;
ALTER TABLE users DROP CONSTRAINT cooklists_users;
ALTER TABLE users DROP CONSTRAINT messages_users;
ALTER TABLE users DROP CONSTRAINT PK_users;
DROP TABLE users;
ALTER TABLE messages DROP CONSTRAINT PK_messages;
DROP TABLE messages;
ALTER TABLE cooklists DROP CONSTRAINT PK_cooklists;
DROP TABLE cooklists;
ALTER TABLE recipes DROP CONSTRAINT PK_recipes;
DROP TABLE recipes;
/*ADD ***************/
CREATE TABLE recipes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    title TEXT NOT NULL,
    creator INTEGER NOT NULL,
    modified TIMESTAMPTZ,
    method VARCHAR(15),
    quickdesc TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    directions TEXT NOT NULL,
    CONSTRAINT PK_recipes PRIMARY KEY (id)
);
CREATE TABLE cooklists (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    title TEXT NOT NULL,
    creator INTEGER NOT NULL,
    modified TIMESTAMPTZ,
    recipeids TEXT NOT NULL,
    CONSTRAINT PK_cooklists PRIMARY KEY (id)
);
CREATE TABLE messages (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    sender INTEGER NOT NULL,
    sentobject TEXT NOT NULL,
    timesent TIMESTAMPTZ,
    CONSTRAINT PK_messages PRIMARY KEY (id)
);
CREATE TABLE users (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    isadmin TEXT NOT NULL,
    createdrecipes TEXT NOT NULL,
    savedrecipes TEXT NOT NULL,
    buddylist TEXT NOT NULL,
    received TEXT NOT NULL,
    CONSTRAINT PK_users PRIMARY KEY (id)
);
/* Add foreign key constraints                                            */
ALTER TABLE users
ADD CONSTRAINT recipes_users FOREIGN KEY (id) REFERENCES recipes (creator);
ALTER TABLE users
ADD CONSTRAINT cooklists_users FOREIGN KEY (id) REFERENCES cooklists (creator);
ALTER TABLE users
ADD CONSTRAINT messages_users FOREIGN KEY (received, id) REFERENCES messages (id, sender);