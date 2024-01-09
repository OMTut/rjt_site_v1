import styles from "./thoughts.module.css"
import PostCard from "@/components/postCard/postCard";

const ThoughtsPage = () => {
    return (
      <div className= {styles.thoughtsContainer}>
        <h1 className={styles.thoughtsTitle}>Dreams & Diatribes</h1>
        <h2 className={styles.thoughtsSubtitle}>A collection of thoughts, ideas, and musings.</h2>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        
      </div>
    );
  }
  
  export default ThoughtsPage;