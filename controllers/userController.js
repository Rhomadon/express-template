const userModel = require('../models/userModel');

const userController = {
  getAllUsers: async (req, res) => {
    const users = await userModel.getAllUsers();
    res.json(users);
  },

  getUserById: async (req, res) => {
    const user = await userModel.getUserById(req.params.id);
    res.json(user);
  },

  createUser: async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = await userModel.createUser(username, email, password);
    res.json(newUser);
  },

  updateUser: async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;
    const updatedUser = await userModel.updateUser(id, username, email, password);
    res.json(updatedUser);
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;
    const deletedUser = await userModel.deleteUser(id);
    res.json(deletedUser);
  },
};

module.exports = userController;

