exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').insert([
        {name: 'tbsp peanut butter'},
        {name: 'tbsp jelly'},
        {name: 'cup water'},
        {name: 'tea bag'},
        {name: 'tbsp cocoa powder'},
       
      ]);
    
};
