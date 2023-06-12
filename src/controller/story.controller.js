const { userModel } = require('../model/user.model');

const getStory = async (req, res) => {
	const users = await userModel();
	res.render('story', { user: users[0] });
};

module.exports = { getStory };
