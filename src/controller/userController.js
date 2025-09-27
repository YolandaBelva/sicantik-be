const userServices = require("../services/userServices");
const response = require("../utils/response");

const userController = {
    createUser: async (req, res) => {
        try {
            const { email, name } = req.body;
            const user = await userServices.createUser(email, name);
            return response({ res, data: user, code: 200, message: "create user success" })
        } catch (error) {
            return response({ res, code: 500, message: error.message })
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await userServices.getAllUsers();
            return response({ res, data: users, code: 200, message: "success" })
        } catch (error) {
            return response({ res, code: 500, message: error.message })
        }
    },

    getUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await userServices.getUserById(parseInt(id));
            return response({ res, data: user, code: 200, message: "get user by id success" })
        } catch (error) {
            return response({ res, code: 500, message: error.message })
        }
    },

    updateUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const data = req.body;
            const user = await userServices.updateUserById(parseInt(id), data);
            return response({ res, data: user, code: 200, message: "update user by id success" })
        } catch (error) {
            return response({ res, code: 500, message: error.message })
        }
    },

    deleteUserById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await userServices.deleteUserById(parseInt(id));
            return response({ res, data: user, code: 200, message: "delete user by id success" })
        } catch (error) {
            return response({ res, code: 500, message: error.message })
        }
    }
};

module.exports = userController;