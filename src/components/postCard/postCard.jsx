import Image from 'next/image';
import Link from 'next/link'
import styles from './postCard.module.css'
const PostCard = ({post, postType}) => {
    console.log(post)
    return (
        <div className={styles.postCardContainer}>
            {post.featured_img && <div className={styles.imgContainer}>
                    <img className={styles.img} src={post.featured_img}/>
                </div>}
            <div className={styles.textCon}>
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
                    <Link className={styles.readMore} href={`/${postType}/${post.slug}`}>READ MORE</Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard