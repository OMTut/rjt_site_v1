import Image from 'next/image';
import Link from 'next/link'
import styles from './postCard.module.css'
const PostCard = () => {
    return (
        <div className={styles.postCardContainer}>
            <div className={styles.imgContainer}>
                <img className={styles.img} src="/../img/catphoto.jpg" alt='cat photo'/>
            </div>
            <h1 className={styles.title}>This is a random title that I made up.</h1>
            <div className={styles.date}>01-09-2024</div>
            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed libero enim sed faucibus turpis in eu. Gravida cum sociis natoque penatibus et. Viverra accumsan in nisl nisi scelerisque eu. Et odio pellentesque diam volutpat. Nulla aliquet enim tortor at auctor urna nunc id. Iaculis nunc sed augue lacus. Amet dictum sit amet justo donec enim. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. At risus viverra adipiscing at.</p>
                <Link className={styles.readMore} href="/thoughts/post">READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard