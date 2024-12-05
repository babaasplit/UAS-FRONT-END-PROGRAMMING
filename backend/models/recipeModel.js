const pool = require('../config/db');

// Mendapatkan semua resep
const getAllRecipes = async () => {
  const query = 'SELECT * FROM recipes;';
  const result = await pool.query(query);
  return result.rows;
};

// Mendapatkan resep berdasarkan ID
const getRecipeById = async (id) => {
  const query = 'SELECT * FROM recipes WHERE id = $1;';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

// Menambahkan resep baru
const createRecipe = async (recipe) => {
  const { title, description, ingredients, category, imageUrl } = recipe;
  const query = `
    INSERT INTO recipes (title, description, ingredients, category, imageUrl)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const values = [title, description, JSON.stringify(ingredients), category, imageUrl];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Memperbarui resep berdasarkan ID
const updateRecipe = async (id, recipe) => {
  const { title, description, ingredients, category, imageUrl } = recipe;
  const query = `
    UPDATE recipes
    SET title = $1, description = $2, ingredients = $3, category = $4, imageUrl = $5
    WHERE id = $6
    RETURNING *;
  `;
  const values = [title, description, JSON.stringify(ingredients), category, imageUrl, id];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Menghapus resep berdasarkan ID
const deleteRecipe = async (id) => {
  const query = 'DELETE FROM recipes WHERE id = $1;';
  await pool.query(query, [id]);
  return { message: 'Recipe deleted successfully.' };
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
