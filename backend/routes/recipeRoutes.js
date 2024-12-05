const express = require('express');
const router = express.Router();
const { getAllRecipes, createRecipe, deleteRecipe, updateRecipe } = require('../controllers/recipeController');

// Rute untuk mendapatkan semua resep
router.get('/recipes', getAllRecipes);

// Rute untuk membuat resep baru
router.post('/recipes', createRecipe);

// Rute untuk menghapus resep berdasarkan ID
router.delete('/recipes/:id', deleteRecipe);

// Rute untuk memperbarui resep berdasarkan ID
router.put('/recipes/:id', updateRecipe);

module.exports = router;
