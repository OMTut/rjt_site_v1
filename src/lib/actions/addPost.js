"use server";
/**********************************************
 * If using server functions, the function has to be async
 */
const pool = require('./../utils');

// export const checkDuplicateTitle = async (title) => {
//     const query = `
//         SELECT post_title FROM posts WHERE post_title = $1
//     `;
//     const values = [title];
//     const res = await pool.query(query, values);
//     return res.rows;
// }

export const addPost = async (formData) => {
  

    const {
        title, category, content, summary
    } = Object.fromEntries(formData);

    //Create Date
    const created_on = new Date();
    const modified_on = created_on;

    //Create slug from title, scrubbs special characters and spaces
    const slug = title.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');

    try {
        const query = `
            INSERT INTO posts (
                post_title, category_name, post_content, post_summary,
                created_on, modified_on, slug
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7
        )`;
        const values = [title, category, content, summary, created_on
            , modified_on, slug];
        await pool.query(query, values);
        console.log("Post added successfully");
    } catch (err) {
        console.log(err);
        return {
            error: "Error adding post"
        }
    }
    //console.log(title, content, summary, featuredImg);
};