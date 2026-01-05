const { prisma } = require('../config/database');

const socialPostRepository = {
    create: (title, content, username) => prisma.socialPost.create({
        data: { 
            title, 
            content, 
            username 
        },
    }),

    findAll: () => prisma.socialPost.findMany({
         orderBy: { created_at: "desc" },
    }),

    findById: (id) => prisma.socialPost.findUnique({
        where: { id },
    }),

    update: (id, data) => prisma.socialPost.update({
        where: { id }, data,
    }),

    remove: (id) => prisma.socialPost.delete({
        where: { id },
    }),
};

module.exports = socialPostRepository;