const { postModel, createPost } = require('../model/post.model');

const renderPosts = async (req, res, next) => {
	try {
		const posts = await postModel();
		res.render('index', { posts: posts });
	} catch (error) {
		console.log(error.message);
	}
};

const createPosts = async (req, res) => {
	try {
		
		const userId = req.cookies.id;
		createPost(req.body, req.file, userId);
		
		res.status(201).json({status: 201, message: 'ok'});
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = { renderPosts, createPosts };
