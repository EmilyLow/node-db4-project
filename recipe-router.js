const express = require('express');
 
const Recipes = require("./recipe-model.js");

const router = express.Router();


router.get('/recipes', (req, res, next) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.json(recipes);
        })
        .catch((err) => {
            next(err);
        })


})

router.get('/recipes/:id/ingredients', (req, res, next) => {
    Recipes.getShoppingList(req.params.id)
        .then(ingredients => {
            res.json(ingredients);
        } )
        .catch((err) => {
            next(err);
        })
})

module.exports = router;