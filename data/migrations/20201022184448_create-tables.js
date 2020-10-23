
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id")
    table.text("name").notNull().unique()
  })

  await knex.schema.createTable("ingredients", (table) => {
      table.increments("id")
      table.text("name").notNull().unique()
  })

  await knex.schema.createTable("steps", (table) => {
      table.increments("id")
      table
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete("SET NULL")
      .onUpdate("CASCADE")
        //Are .onDelete and onUpdate necessary for function?
      table.integer("order").notNull()
      table.integer("content")
  })

  await knex.schema.createTable("recipe_ingredients", (table) => {
      table
        .integer("recipe_id")
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNull()
      table 
        .integer("ingredient_id")
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
        .notNull()
    table
        .real("quantity")
        .notNull()
    table.primary(["recipe_id", "ingredient_id"])

  })
};



exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipe_ingredients")
  await knex.schema.dropTableIfExists("steps")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};
