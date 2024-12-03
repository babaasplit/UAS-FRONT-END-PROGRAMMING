const pool = require('../config/db');
const bcrypt = require('bcrypt');  // Jangan lupa import bcrypt

const createUser = async (fullname, email, username, password) => {
  let emailResult;  // Deklarasikan emailResult di luar try-catch
  try {
    // Check if the email already exists
    const emailCheckQuery = 'SELECT * FROM users WHERE LOWER(email) = LOWER($1)';
    
    try {
      emailResult = await pool.query(emailCheckQuery, [email]);
      console.log('Email Check Result:', emailResult);  // Log the entire result
    } catch (error) {
      console.error('Error checking email:', error.message);
      throw error; // Re-throw the error after logging it
    }

    // Log email result for debugging
    console.log('Email Check Result:', emailResult);  // Log the entire result

    // Check if email is already registered
    if (emailResult && emailResult.rows && emailResult.rows.length > 0) {
      throw new Error('Email is already registered');
    }

    // Proceed to insert the new user if email is not found
    const hashedPassword = await bcrypt.hash(password, 10); // Encrypt password
    const query = `
      INSERT INTO users (fullname, email, username, password)
      VALUES ($1, $2, $3, $4)
      RETURNING id, fullname, email, username;
    `;
    const values = [fullname, email, username, hashedPassword];
    const result = await pool.query(query, values);
    console.log('Insert Query Result:', result);  // Log hasil query secara keseluruhan
    
    // Periksa apakah result.rows ada
    if (result) {
      return result;  // Kembalikan baris pertama dari hasil
    } else {
      throw new Error('Insert query returned undefined or invalid result');
    }

  } catch (error) {
    console.error('Error creating user:', error.message);
    // Throw error with more specific message to identify unique constraint violation
    if (error.message.includes('users_email_key')) {
      throw new Error('Email is already registered');
    }
    throw error; // Rethrow the error if it's not a unique constraint violation
  }
};


const findUserByUsername = async (username) => {
  try {
    const query = 'SELECT * FROM users WHERE LOWER(username) = LOWER($1)';
    const result = await pool.query(query, [username]);

    console.log('Full query result:', JSON.stringify(result, null, 2));

    // Jika result adalah array langsung
    if (result && Array.isArray(result) && result.length > 0) {
      return result[0]; // Ambil user pertama
    }

    console.log(`User with username ${username} not found.`);
    return null;
  } catch (error) {
    console.error('Error finding user by username:', error.message);
    throw error;
  }
};


module.exports = { createUser , findUserByUsername };
