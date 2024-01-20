import styles from "@/app/thoughts/thoughts.module.css"
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: {
    default: 'Projects',
    template: '%s - RJTuttle.com'
  },
  description: 'Software Development & Engineering Projects Page',
};

const ProjectsPage = async () => {
  
  const posts = await getPosts("projects")

  return (
    <div className= {styles.thoughtsContainer}>
      <h1 className={styles.thoughtsTitle}>Projects</h1>
      <h2 className={styles.thoughtsSubtitle}>A collection of things I find interesting.</h2>
        {
          posts.map(post=>(
            <div className={styles.post} key={post.post_id}>
              <PostCard post={post} postType="projects"/>
            </div>
          ))
        }
        
    </div>
  );
}
  
export default ProjectsPage;