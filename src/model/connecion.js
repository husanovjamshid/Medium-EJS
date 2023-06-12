// import pg from "pg";
const pg = require('pg');

const pool = new pg.Pool({
	connectionString:
		'postgres://dnmzsblj:txkNH_fPq4ZSkUuYcJf83oFfrMk3XC8x@snuffleupagus.db.elephantsql.com/dnmzsblj',
});
async function fetchAll(SQL, params = []) {
	const client = await pool.connect();
	try {
		const data = await client.query(SQL, params);
		const { rows } = data;

		return rows;
	} catch (error) {
		console.log(error.message);
		return error.message;
	} finally {
		client.release();
	}
}

module.exports = { fetchAll };
