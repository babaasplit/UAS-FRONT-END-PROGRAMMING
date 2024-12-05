const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');  // Import controller untuk resep

// Mendapatkan semua resep
router.get('/recipes', recipeController.getAllRecipes);

// Menambahkan resep baru
router.post('/recipes', recipeController.createRecipe);

module.exports = router;
