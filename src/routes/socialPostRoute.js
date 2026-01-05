const express = require("express");
const socialPostRoute = express.Router();
const socialPostController = require("../controller/socialPostController");

socialPostRoute.post("/", socialPostController.createPost);
socialPostRoute.get("/", socialPostController.getAllPosts);
socialPostRoute.get("/:id", socialPostController.getPostById);
socialPostRoute.put("/:id", socialPostController.updatePostById);
socialPostRoute.delete("/:id", socialPostController.deletePostById);

module.exports = socialPostRoute;