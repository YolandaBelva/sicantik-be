const socialPostServices = require("../services/socialPostServices");
const response = require("../utils/response");

const socialPostController = {
  createPost: async (req, res) => {
        try {
            const { title, content, username } = req.body;
            await socialPostServices.createPost(title, content, username);
            return response({res,message: "Success",});
        } catch (error) {
            return response({res,code: 500,message: error.message,});
        }
    },

  getAllPosts: async (req, res) => {
        try {
            const posts = await socialPostServices.getAllPosts();
            const mappedPosts = posts.map(p => ({
                id: p.id,
                title: p.title,
                content: p.content,
                username: p.username,
            }));

            return response({res,data: mappedPosts,message: "Success",});
        } catch (error) {
            if (String(error.message).toLowerCase().includes("no posts")) {
                return response({res,data: [],message: "Success",});
            }
            return response({res,code: 500,message: error.message,});
        }
    },

  getPostById: async (req, res) => {
        try {
            const { id } = req.params;
            const post = await socialPostServices.getPostById(id);

            const mappedPost = {
              title: post.title,
              content: post.content,
              username: post.username,
            };

            return response({res,data: mappedPost,message: "Success",});
        } catch (error) {
            return response({res,code: 500,message: error.message,});
        }
    },

  updatePostById: async (req, res) => {
        try {
            const { id } = req.params;
            const data = req.body;
            const post = await socialPostServices.updatePostById(id, data);
            return response({res,data: post,message: "Success",});
        } catch (error) {
            return response({res,code: 500,message: error.message,});
        }
    },

  deletePostById: async (req, res) => {
        try {
            const { id } = req.params;
            const post = await socialPostServices.deletePostById(id);
            return response({res,data: post,message: "Success",});
        } catch (error) {
            return response({res,code: 500,message: error.message,});
        }
    },
};

module.exports = socialPostController;