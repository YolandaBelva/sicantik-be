const { prisma } = require('../config/database');

const userRepository = {
    create: (email, name) => prisma.user.create({
        data: {
            email: email,
            name: name
        }
    }),

    findAll: () => prisma.user.findMany(),

    findById: (id) => prisma.user.findUnique({
        where: {
            id: id
        }
    }),

    findByEmail: (email) => prisma.user.findUnique({
        where: {
            email: email
        }
    }),

    updateById: (id, data) => prisma.user.update({
        where: {
            id: id
        },
        data: data
    }),

    deleteById: (id) => prisma.user.delete({
        where: {
            id: id
        }
    })
};

module.exports = userRepository;