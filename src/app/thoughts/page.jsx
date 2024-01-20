import styles from "./thoughts.module.css"
import PostCard from "@/components/postCard/postCard";

//Gets data from the api route
const getData = async () => {
  const res = await fetch('http://localhost:3000/api/thoughts', {next:{revalidate:3600}})
  if (!res.ok) {
    throw new Error("Something went wrong")
  }
  return res.json();
}

const ThoughtsPage = async () => {
  
  const posts = await getData();

  return (
    <div className= {styles.thoughtsContainer}>
      <h1 className={styles.thoughtsTitle}>Dreams & Diatribes</h1>
      <h2 className={styles.thoughtsSubtitle}>A collection of thoughts, ideas, and musings.</h2>
        {
          posts.map(post=>(
            <div className={styles.post} key={post.post_id}>
              <PostCard post={post} postType="thoughts"/>
            </div>
          ))
        }
        
    </div>
  );
}
  
export default ThoughtsPage;