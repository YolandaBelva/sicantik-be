const { prisma } = require("../config/database");

const flashcardRepository = {
    create: (question, answer) => prisma.flashcard.create({
        data: {
            question,
            answer,
        },
        }),

    findAll: () => prisma.flashcard.findMany({
        orderBy: { created_at: "desc" },
        }),

    findById: (id) => prisma.flashcard.findUnique({
        where: { id },
        }),

    updateById: (id, data) => prisma.flashcard.update({
        where: { id },
                data,
        }),

    deleteById: (id) => prisma.flashcard.delete({
        where: { id },
        }),
};

module.exports = flashcardRepository;