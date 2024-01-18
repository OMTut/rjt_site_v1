import PostCard from '@/components/postCard/postCard';
import styles from './home.module.css';
import { getAllPosts } from "@/lib/data";

const posts = await getAllPosts()

const Home = async () => {
    return (
      <div className={styles.homeContainer}>
        <div className={styles.leftContainer}>
          <h1>In Development</h1>
          <p>This site is currently under construction. Forgive the jankiness.</p>
        </div>
        <div className={styles.rightContainer}>
          <h1>Dreams & Diatribes</h1>
          {
            posts.map(post=>(
              <div className={styles.blogSummary} key={post.post_id}>
                <PostCard post={post}/>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
  
  export default Home;