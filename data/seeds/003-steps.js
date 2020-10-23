exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps').insert([
        {recipe_id: 1, order: 1, content: "Slice bread"},
        {recipe_id: 1, order: 2, content: "Spread peanut butter"},
        {recipe_id: 1, order: 3, content: "Spread jelly"},
        {recipe_id: 1, order: 4, content: "Close sandwhich"},
        {recipe_id: 2, order: 1, content: "Heat water"},
        {recipe_id: 2, order: 2, content: "Insert teabag and wait 3 minutes"},
        {recipe_id: 2, order: 3, content: "Thow away teabag"},
        {recipe_id: 3, order: 1, content: "Heat water"},
        {recipe_id: 3, order: 2, content: "Stir in cocoa powder"},

       
      ]);
    
};
