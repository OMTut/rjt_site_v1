const pool = require('./utils')

export const getPosts = async () => {
    const res = await pool.query('SELECT * FROM thoughts');
    return res.rows;
}

//returns a single post by id
export const getPost = async (id) => {
    const res = await pool.query('SELECT * FROM thoughts WHERE id = $1', [id]);
    return res.rows[0];
}