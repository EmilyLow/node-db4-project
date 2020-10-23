
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').insert([
        {name: 'pb&j'},
        {name: 'tea'},
        {name: 'hot chocolate'},
       
      ]);
    
};
