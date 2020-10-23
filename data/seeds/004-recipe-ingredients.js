exports.seed = async function(knex) {
  await knex('recipe_ingredients').insert([
        //pbj
        {recipe_id: 1, ingredient_id: 1, quantity: 2},
        {recipe_id: 1, ingredient_id: 2, quantity: 3},
        {recipe_id: 1, ingredient_id: 6, quantity: 2},
        //tea
        {recipe_id: 2, ingredient_id: 3, quantity: 1.5},
        {recipe_id: 2, ingredient_id: 4, quantity: 1},
        //hot chocolate
        {recipe_id: 3, ingredient_id: 3, quantity: 1.5},
        {recipe_id: 3, ingredient_id: 5, quantity: 2},

       
      ]);
    
};
