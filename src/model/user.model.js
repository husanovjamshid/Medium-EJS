const { fetchAll } = require('./connecion');

const userModel = async () => {
	const users = await fetchAll('SELECT * FROM users');
	// console.log(users);
	return users;
};

const CreateUser = async ({ given_name, family_name, picture, email, sub }) => {
	const users = await fetchAll(
		`INSERT INTO users(user_id, first_name, last_name, password, email, avatar) 
		 VALUES ($1, $2, $3, $4, $5, $6) 
		 RETURNING *`,
		[sub, given_name, family_name, sub, email, picture],
	);
	return users;
};

module.exports = { userModel, CreateUser };
