const flashcardRepository = require("../repository/flashcardRepository");

const flashcardServices = {
    createFlashcard: async (question, answer) => {
        if (!question || !answer) throw new Error("Question or answer required");
        const q = String(question).trim();
        const a = String(answer).trim();
        if (!q || !a) throw new Error("Question or answer required");
        return await flashcardRepository.create(q, a);
    },

    getAllFlashcards: async () => {
        const flashcards = await flashcardRepository.findAll();
        return flashcards || [];
    },

    getFlashcardById: async (id) => {
        if (!id) throw new Error("ID required");
        const flashcard = await flashcardRepository.findById(id);
        if (!flashcard) throw new Error("Flashcard not found");
        return flashcard;
    },

    updateFlashcardById: async (id, data) => {
        if (!id) throw new Error("ID required");
        if (!data || Object.keys(data).length === 0) throw new Error("No data to update");
        const flashcard = await flashcardRepository.findById(id);
        if (!flashcard) throw new Error("Flashcard not found");

        const payload = { ...data };
        if (payload.question !== undefined) payload.question = String(payload.question).trim();
        if (payload.answer !== undefined) payload.answer = String(payload.answer).trim();

        if (payload.question !== undefined && !payload.question) throw new Error("Question required");
        if (payload.answer !== undefined && !payload.answer) throw new Error("Answer required");
        return await flashcardRepository.updateById(id, payload);
    },

    deleteFlashcardById: async (id) => {
        if (!id) throw new Error("ID required");
        const flashcard = await flashcardRepository.findById(id);
        if (!flashcard) throw new Error("Flashcard not found");
        return await flashcardRepository.deleteById(id);
    },
};

module.exports = flashcardServices;