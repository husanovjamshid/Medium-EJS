const { fetchAll } = require('./connecion');

const postModel = async () => {
	const posts = await fetchAll('SELECT * FROM posts as p INNER JOIN users as u ON p.user_id = u.user_id');
	return posts;
};

const createPost = async ({ title, desc }, { filename }, userId) => {
	console.log(userId);
	const posts = await fetchAll(
		'INSERT INTO posts(title, body, image, user_id ) VALUES ($1, $2, $3, $4) RETURNING *',
		[title, desc, filename, userId ],
	);
	console.log(posts);
	return posts;
};

module.exports = { postModel, createPost };
