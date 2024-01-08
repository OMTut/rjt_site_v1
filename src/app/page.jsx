import styles from './home.module.css';

const Home = () => {
    return (
      <div className={styles.homeContainer}>
        <div className={styles.leftContainer}>
          <h1>In Development</h1>
          <p>This site is currently under construction. Forgive the jankiness.</p>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.blogSummary}>
            <h1>Dreams & Diatribes</h1>
            <h2>Blog</h2>
            <p>Coming soon...</p>
          </div>
          <div className={styles.blogSummary}>
            <h2>Blog</h2>
            <p>Coming soon...</p>
          </div>
          <div className={styles.blogSummary}>
            <h2>Blog</h2>
            <p>Coming soon...</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;