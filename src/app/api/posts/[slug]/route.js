import { NextResponse } from 'next/server';

const pool = require('@/lib/utils')

export const GET = async(req, res) => {
    const {slug} = res.query; 
    try {
        const post = await pool.query('SELECT * FROM posts WHERE slug = $1', [slug]);
        return NextResponse.json(post.rows);
    } catch(err) {
        console.log(err);
        throw new Error("Failed to get posts");
    }
}