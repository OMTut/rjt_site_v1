/**********************************************
 * If using server functions, the function has to be async
 */
"use server";
import { revalidatePath } from 'next/cache';

const pool = require('./utils');

/**************************
 * ADD POST to DB
 */
export const addPost = async (formData) => {

    const {
        title, category, content, summary
    } = Object.fromEntries(formData);

    //Create Date
    const created_on = new Date();
    const modified_on = created_on;

    //Create slug from title, scrubbs special characters and spaces
    const slug = title.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');

    //USER ID needs to be dynamic. For now it's forced
    const user_id = 1;

    try {
        const query = `
            INSERT INTO posts (
                post_title, category_name, post_content, post_summary,
                created_on, modified_on, slug, user_id
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8
        )`;
        const values = [title, category, content, summary, created_on
            , modified_on, slug, user_id];
        await pool.query(query, values);
        revalidatePath('/');
        revalidatePath(`/${category.toLowerCase()}`);
        console.log("Post added successfully");
    } catch (err) {
        console.log(err);
        return {
            error: "Error adding post"
        }
    }
    //console.log(title, content, summary, featuredImg);
};

/**************************
 * ADD POST to DB
 */
export const deletePost = async (formData) => {

    const { post_id } = Object.fromEntries(formData);

    try {
        const query = `
            DELETE FROM posts WHERE post_id = $1
        `;
        await pool.query(query, [post_id]);
        revalidatePath('/');
        revalidatePath(`/${category.toLowerCase()}`);
        console.log("Post deleted successfully");
    } catch (err) {
        console.log(err);
        return {
            error: "Error deleting post"
        }
    }
    //console.log(title, content, summary, featuredImg);
};