require('dotenv').config();

const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

pool.connect((err) => {
    if (err) {
        console.error('Failed to connect to Postgres.', err);
    } else {
        console.log('Connected to Postgres.');
    }
})

export const getPosts = async () => {
    const res = await pool.query('SELECT * FROM thoughts');
    return res.rows;
}

//returns a single post by id
export const getPost = async (id) => {
    const res = await pool.query('SELECT * FROM thoughts WHERE id = $1', [id]);
    return res.rows[0];
}