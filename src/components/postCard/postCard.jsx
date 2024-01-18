import Image from 'next/image';
import Link from 'next/link'
import styles from './postCard.module.css'
const PostCard = ({post}) => {
    console.log(post)
    return (
        <div className={styles.postCardContainer}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src="/../img/catphoto.jpg" alt='cat photo'/>
            </div>
            <h1 className={styles.title}>{post.post_title}</h1>
            <div className={styles.date}>
                {post?.created_on?.toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })
                }
            </div>
            <div className={styles.content}>
                <p>{ post.post_summary}</p>
                <Link className={styles.readMore} href={`/thoughts/${post.post_id}`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard