import { NextResponse } from 'next/server';

const pool = require('@/lib/utils')

export const GET = async(req, res) => {
    try {
        const posts = await pool.query('SELECT * FROM posts');
        return NextResponse.json(posts.rows);
    } catch(err) {
        console.log(err);
        throw new Error("Failed to get posts");
    }
}