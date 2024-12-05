const pool = require('../config/db');  // Import koneksi ke database

// Fungsi untuk mendapatkan semua resep
const getAllRecipes = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM recipes');
    console.log(result);
    
    res.status(200).json(result);  // Mengembalikan daftar resep sebagai JSON
  } catch (error) {
    console.error('Error fetching recipes:', error.message);
    res.status(500).json({ message: 'Error fetching recipes', error: error.message });
  }
};

// Fungsi untuk menambahkan resep baru

const createRecipe = async (req, res) => {
    const { title, description, ingredients, category, imageUrl } = req.body;
  
    // Log untuk debugging
    console.log('Request body received from frontend:', req.body);
  
    if (!title || !description || !ingredients || !category || !imageUrl) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      const ingredientsJson = JSON.stringify(ingredients); // Mengubah ingredients menjadi JSON string
  
      const query = `
        INSERT INTO recipes (title, description, ingredients, category, imageUrl)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;
      const values = [title, description, ingredientsJson, category, imageUrl];
  
      console.log('Running query:', query);  // Log query
      console.log('With values:', values);  // Log values
  
      const result = await pool.query(query, values);
  
      console.log('Query result:', result.rows);  // Log hasil query
  
      if (result) {
        res.status(201).json(result); // Berhasil menambahkan resep
      } else {
        throw new Error('No data returned from the query');
      }
    } catch (error) {
      console.error('Error creating recipe:', error.message);
      res.status(500).json({ message: 'Error creating recipe', error: error.message });
    }
  };

  // Fungsi untuk menghapus resep berdasarkan ID
const deleteRecipe = async (req, res) => {
    const { id } = req.params;  // Mendapatkan ID dari parameter URL
  
    if (!id) {
      return res.status(400).json({ message: 'Recipe ID is required' });
    }
  
    try {
      const query = 'DELETE FROM recipes WHERE id = $1 RETURNING *;';
      const values = [id];
  
      console.log('Running query:', query);  // Log query
      console.log('With values:', values);  // Log values
  
      const result = await pool.query(query, values);
  
      // Mengecek apakah data berhasil dihapus
      if (result.rowCount === 0) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
  
      console.log('Recipe deleted:', result.rows);  // Log hasil penghapusan
  
      res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
      console.error('Error deleting recipe:', error.message);
      res.status(500).json({ message: 'Error deleting recipe', error: error.message });
    }
  };

  // Fungsi untuk memperbarui resep berdasarkan ID
const updateRecipe = async (req, res) => {
    const { id } = req.params;  // Mendapatkan ID dari parameter URL
    const { title, description, ingredients, category, imageUrl } = req.body;  // Mengambil data dari request body
  
    if (!title || !description || !ingredients || !category || !imageUrl) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    try {
      const ingredientsJson = JSON.stringify(ingredients); // Mengubah ingredients menjadi JSON string
  
      const query = `
        UPDATE recipes
        SET title = $1, description = $2, ingredients = $3, category = $4, imageUrl = $5
        WHERE id = $6
        RETURNING *;
      `;
      const values = [title, description, ingredientsJson, category, imageUrl, id];
  
      console.log('Running query:', query);  // Log query
      console.log('With values:', values);  // Log values
  
      const result = await pool.query(query, values);
  
      // Mengecek apakah ada resep yang diperbarui
      if (result.rowCount === 0) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
  
      console.log('Recipe updated:', result.rows);  // Log hasil update
  
      res.status(200).json({ message: 'Recipe updated successfully', recipe: result.rows[0] });
    } catch (error) {
      console.error('Error updating recipe:', error.message);
      res.status(500).json({ message: 'Error updating recipe', error: error.message });
    }
  };
  
  module.exports = { getAllRecipes, createRecipe, deleteRecipe, updateRecipe };
  