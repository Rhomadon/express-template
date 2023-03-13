const pool = require('../config');

const userModel = {
  getAllUsers: async () => {
    const { rows } = await pool.query('SELECT * FROM users');
    return rows;
  },

  getUserById: async (id) => {
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return rows[0];
  },

  createUser: async (username, email, password) => {
    const { rows } = await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *', [username, email, password]);
    return rows[0];
  },

  updateUser: async (id, username, email, password) => {
    const { rows } = await pool.query('UPDATE users SET username = $2, email = $3, password = $4 WHERE id = $1 RETURNING *', [id, username, email, password]);
    return rows[0];
  },

  deleteUser: async (id) => {
    const { rows } = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return rows[0];
  }
};

module.exports = userModel;
