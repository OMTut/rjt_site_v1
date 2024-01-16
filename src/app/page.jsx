import PostCard from '@/components/postCard/postCard';
import styles from './home.module.css';

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) { 
    throw new Error("something went wrong")
  }
  return res.json()
}

const Home = async () => {
  const posts = await getData() //retrieve data from api
    return (
      <div className={styles.homeContainer}>
        <div className={styles.leftContainer}>
          <h1>In Development</h1>
          <p>This site is currently under construction. Forgive the jankiness.</p>
        </div>
        <div className={styles.rightContainer}>
          <h1>Dreams & Diatribes</h1>
          {
            posts.slice(0,1).map(post=>(
              <div className={styles.blogSummary} key={post.id}>
                <PostCard post={post}/>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
  
  export default Home;