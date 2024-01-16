//TEMPORARY DATA
const users = [
    {id:1, name: 'Tuttle'},
]

const posts = [
    {id:1, title: 'Post 1', body: 'This is the body of post 1', userId: 1},
    {id:2, title: 'Post 2', body: 'This is the body of post 2', userId: 1},
    {id:3, title: 'Post 3', body: 'This is the body of post 3', userId: 1},
    {id:4, title: 'Post 4', body: 'This is the body of post 4', userId: 1},
    {id:5, title: 'Post 5', body: 'This is the body of post 5', userId: 1},
]

export const getPosts = async () => {
    return posts
}

//returns a single post by id
export const getPost = async (id) => {
    const post = posts.find((post) => post.id === parseInt(id))
    console.log(post)
    return post;
}

//returns a single user by id
export const getUser = async (id) => {
    return users.find((user) => user.id === parseInt(id))
}