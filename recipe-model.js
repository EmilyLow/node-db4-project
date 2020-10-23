const db = require("./data/config");

function getRecipes() {

    return db("recipes");
}

//return a list of all ingredients and quantities for a given recipe
function getShoppingList(recipe_id) {

    return db("recipe_ingredients as ri")
        .innerJoin("ingredients as i", "i.id", "ri.ingredient_id" )
        .innerJoin("recipes as r","r.id", "ri.recipe_id")
        .where("r.id" , recipe_id) 

}

//should return a list of step by step instructions for preparing a recipe
function getInstructions(recipe_id) {

}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}