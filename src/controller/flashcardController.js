const flashcardServices = require("../services/flashcardServices");
const response = require("../utils/response");

const flashcardController = {
  createFlashcard: async (req, res) => {
        try {
            const { question, answer } = req.body;
            await flashcardServices.createFlashcard(question, answer);
            return response({res,message: "Success",});
        } catch (error) {
            const msg = String(error.message).toLowerCase();
            if (msg.includes("required")) {
                return response({res,code: 400,message: error.message,});
            }
            return response({res,code: 500,message: error.message,});
        }
    },

  getAllFlashcards: async (req, res) => {
        try {
            const flashcards = await flashcardServices.getAllFlashcards();
            const mappedFlashcards = (flashcards || []).map(f => ({
              question: f.question,
              answer: f.answer,
            }));
            return response({res,data: mappedFlashcards,message: "Success",});
        } catch (error) {
            return response({res,code: 500,message: error.message,});
        }
    },

  getFlashcardById: async (req, res) => {
        try {
            const { id } = req.params;
            const flashcard = await flashcardServices.getFlashcardById(id);
            const mappedFlashcard = {
              question: flashcard.question,
              answer: flashcard.answer,
            };
            return response({res,data: mappedFlashcard,message: "Success",});
        } catch (error) {
            const msg = String(error.message).toLowerCase();

            if (msg.includes("id required")) {
                return response({res,code: 400,message: error.message,});
            }
            if (msg.includes("not found")) {
                return response({res,code: 404,message: error.message,});
            }
            return response({res,code: 500,message: error.message,});
        }
    },

  updateFlashcardById: async (req, res) => {
        try {
            const { id } = req.params;
            const data = req.body;
            await flashcardServices.updateFlashcardById(id, data);
            return response({res,message: "Success",});
        } catch (error) {
            const msg = String(error.message).toLowerCase();

            if (msg.includes("id required") || msg.includes("no data") || msg.includes("required")) {
                return response({res,code: 400,message: error.message,});
            }
            if (msg.includes("not found")) {
                return response({res,code: 404,message: error.message,});
            }
            return response({res,code: 500,message: error.message,});
        }
    },

  deleteFlashcardById: async (req, res) => {
        try {
            const { id } = req.params;
            await flashcardServices.deleteFlashcardById(id);
            return response({res,message: "Success",});
        } catch (error) {
            const msg = String(error.message).toLowerCase();

            if (msg.includes("id required")) {
                return response({res,code: 400,message: error.message,});
            }
            if (msg.includes("not found")) {
                return response({res,code: 404,message: error.message,});
            }
            return response({res,code: 500,message: error.message,});
        }
    },
};

module.exports = flashcardController;