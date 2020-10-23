const db = require("./data/config");

function getRecipes() {

    return db("recipes");
}

//!! For the next two is there a way to show recipe name only once?
//return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {

    return db("recipe_ingredients as ri")
        .innerJoin("ingredients as i", "i.id", "ri.ingredient_id" )
        .innerJoin("recipes as r","r.id", "ri.recipe_id")
        .where("r.id" , recipe_id)
        .select("r.name as recipe_name", "i.name as ingredient");

}

//should return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {
    return db("steps as s")
        .innerJoin("recipes as r", "r.id", "s.recipe_id")
        .where("r.id", recipe_id)
        .select("r.name as recipe_name", "s.order", "s.content as step")

}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}