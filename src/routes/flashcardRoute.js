const express = require("express");
const flashcardController = require("../controller/flashcardController");

const flashcardRoute = express.Router();

flashcardRoute.post("/", flashcardController.createFlashcard);
flashcardRoute.get("/", flashcardController.getAllFlashcards);
flashcardRoute.get("/:id", flashcardController.getFlashcardById);
flashcardRoute.put("/:id", flashcardController.updateFlashcardById);
flashcardRoute.delete("/:id", flashcardController.deleteFlashcardById);

module.exports = flashcardRoute;