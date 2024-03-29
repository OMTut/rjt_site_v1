const pool = require('./utils')
import { unstable_noStore as noStore } from 'next/cache'; //unstable exmple

/*****************************
 * Generic function to handle queries
 */
const executeQuery = async (query, params = []) => {
    noStore(); 
    try {
        console.log(`Running query: ${query} with params: ${params}`);
        const res = await pool.query(query, params);
        console.log(`Query result: ${res.rows}`);
        return res.rows;
    } catch (err) {
        console.error(`Error running query: ${err}`);
        throw new Error('Failed to execute query');
    }
}
/*****************************
 * Gets all posts
 */
export const getAllPosts = async () => {
    return executeQuery('SELECT * FROM posts ORDER BY post_id DESC LIMIT 2');
}

/*****************************
 * Gets all posts from the Category
 * params: category_id
 */
export const getPosts = async (category_name) => {
    return executeQuery('SELECT * FROM posts WHERE category_name = $1 ORDER BY post_id DESC', [category_name]);
}

/******************************
 * Get a single post by id
 * params: post_id
 */
export const getPost = async (slug) => {
    const rows = await executeQuery('SELECT * FROM posts WHERE slug = $1', [slug]);
    return rows[0];
}