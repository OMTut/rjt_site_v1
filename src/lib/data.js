//TEMPORARY DATA
// const users = [
//     {id:1, name: 'Tuttle'},
// ]

// const posts = [
//     {id:1, title: 'Post 1', body: 'This is the body of post 1', userId: 1},
//     {id:2, title: 'Post 2', body: 'This is the body of post 2', userId: 1},
//     {id:3, title: 'Post 3', body: 'This is the body of post 3', userId: 1},
//     {id:4, title: 'Post 4', body: 'This is the body of post 4', userId: 1},
//     {id:5, title: 'Post 5', body: 'This is the body of post 5', userId: 1},
// ]

// export const getPosts = async () => {
//     return posts
// }

// //returns a single post by id
// export const getPost = async (id) => {
//     const post = posts.find((post) => post.id === parseInt(id))
//     return post;
// }

// //returns a single user by id
// export const getUser = async (id) => {
//     return users.find((user) => user.id === parseInt(id))
// }

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
    //const post = posts.find((post) => post.id === parseInt(id))
    //return post;
    const res = await pool.query('SELECT * FROM thoughts WHERE id = $1', [id]);
    return res.rows[0];
}