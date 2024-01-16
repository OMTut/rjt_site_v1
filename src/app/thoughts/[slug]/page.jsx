import Image from 'next/image';
import styles from './singlePost.module.css'

//function to contect to API
const getData = async (slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    if (!res.ok) { 
      throw new Error("something went wrong")
    }
    return res.json()
  }

const SinglePostPage = async ({params}) => {
    console.log(params)
    const {slug} = params 
    const post = await getData(slug)

    return (
        <div className={styles.singlePostPageContainer}>
            <div className={styles.imgContainer}></div>
            <div className={styles.postContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.date}>01-09-2024</div>
                <div className={styles.content}>
                    {post.body}
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage