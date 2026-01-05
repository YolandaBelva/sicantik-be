const socialPostRepository = require("../repository/socialPostRepository");

const socialPostServices = {
    createPost: async (title, content, username) => {
        if (!title || !content || !username) throw new Error("Title, content, or username required");
        title = String(title).trim();
        content = String(content).trim();
        username = String(username).trim();
        if (!title || !content || !username) throw new Error("Title, content, or username required");
        return await socialPostRepository.create(title, content, username);
    },

    getAllPosts: async () => {
        const posts = await socialPostRepository.findAll();
        return posts;
    },

    getPostById: async (id) => {
        if (!id) throw new Error("ID required");
        const post = await socialPostRepository.findById(id);
        if (!post) throw new Error("Post not found");
        return post;
    },

    updatePostById: async (id, data) => {
        if (!id) throw new Error("ID required");
        const post = await socialPostRepository.findById(id);
        if (!post) throw new Error("Post not found");
        if (!data || Object.keys(data).length === 0) throw new Error("No data to update");
    
        const payload = { ...data };
        if (payload.title !== undefined) payload.title = String(payload.title).trim();
        if (payload.content !== undefined) payload.content = String(payload.content).trim();
        if (payload.username !== undefined) payload.username = String(payload.username).trim();

        if (payload.title !== undefined && !payload.title) throw new Error("Title required");
        if (payload.content !== undefined && !payload.content) throw new Error("Content required");
        if (payload.username !== undefined && !payload.username) throw new Error("Username required");

        return await socialPostRepository.update(id, payload);
    },

    deletePostById: async (id) => {
        if (!id) throw new Error("ID required");
        const post = await socialPostRepository.findById(id);
        if (!post) throw new Error("Post not found");
        return await socialPostRepository.remove(id);
    },
};

module.exports = socialPostServices;