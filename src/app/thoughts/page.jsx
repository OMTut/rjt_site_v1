import styles from "./thoughts.module.css"
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

// Fetch Data using an API
// const getData = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   if (!res.ok) { 
//     throw new Error("something went wrong")
//   }
//   return res.json()
// }

const ThoughtsPage = async () => {
  
  const posts = await getPosts(1)

  return (
    <div className= {styles.thoughtsContainer}>
      <h1 className={styles.thoughtsTitle}>Dreams & Diatribes</h1>
      <h2 className={styles.thoughtsSubtitle}>A collection of thoughts, ideas, and musings.</h2>
        {
          posts.map(post=>(
            <div className={styles.post} key={post.post_id}>
              <PostCard post={post}/>
            </div>
          ))
        }
        
    </div>
  );
}
  
export default ThoughtsPage;