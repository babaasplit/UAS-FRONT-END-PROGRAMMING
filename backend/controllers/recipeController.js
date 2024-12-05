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
  

module.exports = { getAllRecipes, createRecipe };
