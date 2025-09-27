const userRepository = require("../repository/userRepository");

const userServices = {
    createUser: async (email, name) => {
        if (!email || !name) throw new Error('Email or name required');
        const isExist = await userRepository.findByEmail(email)
        if (isExist) throw new Error("email already exist")
        return await userRepository.create(email, name);
    },

    getAllUsers: async () => {
        const users = await userRepository.findAll();
        if (!users || users.length === 0) throw new Error('You have no users');
        return users;
    },

    getUserById: async (id) => {
        if (!id) throw new Error('ID required');
        const user = await userRepository.findById(id);
        if (!user) throw new Error('User not found');
        return user;
    },

    updateUserById: async (id, data) => {
        if (!id) throw new Error('ID required');
        const user = await userRepository.findById(id);
        if (!user) throw new Error('User not found');
        return await userRepository.updateById(id, data);
    },

    deleteUserById: async (id) => {
        if (!id) throw new Error('ID required');
        const user = await userRepository.findById(id);
        if (!user) throw new Error('User not found');
        return await userRepository.deleteById(id);
    }
}

module.exports = userServices;