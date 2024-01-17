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
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.date}>
                {post?.date?.toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })
                }
            </div>
            <div className={styles.content}>
                <p>{ post.content}</p>
                <Link className={styles.readMore} href={`/thoughts/${post.id}`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard