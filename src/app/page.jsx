import PostCard from '@/components/postCard/postCard';
import styles from './home.module.css';

const Home = () => {
    return (
      <div className={styles.homeContainer}>
        <div className={styles.leftContainer}>
          <h1>In Development</h1>
          <p>This site is currently under construction. Forgive the jankiness.</p>
        </div>
        <div className={styles.rightContainer}>
          <h1>Dreams & Diatribes</h1>
          <div className={styles.blogSummary}>
            <PostCard/>  
          </div>
          
        
        </div>
      </div>
    );
  }
  
  export default Home;