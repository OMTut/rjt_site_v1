import Image from 'next/image';
import Link from 'next/link'
import styles from './adminCard.module.css'
const AdminCard = ({post, postType}) => {
    return (
        <div className={styles.adminCardContainer}>
            <div className={styles.title}>{post.post_title}</div>
                <div className={styles.date}>
                    {new Date(post?.created_on)?.toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </div>
            <div className={styles.content}>
                <Link className={styles.readMore} href={`/${postType}/${post.slug}`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default AdminCard