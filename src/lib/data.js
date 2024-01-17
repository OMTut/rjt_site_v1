const pool = require('./utils')

export const getPosts = async () => {
    try {
        const res = await pool.query('SELECT * FROM thoughts');
        return res.rows;
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch Posts');
    }
}

//returns a single post by id
export const getPost = async (id) => {
    try {
        const res = await pool.query('SELECT * FROM thoughts WHERE id = $1', [id]);
        return res.rows[0];
    } catch {
        console.log(err);
        throw new Error('Failed to fetch Post');
    }
}