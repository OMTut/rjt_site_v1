import styles from "@/app/thoughts/thoughts.module.css"
import PostCard from "@/components/postCard/postCard";
import { getPosts } from "@/lib/data";

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/projects', {next:{revalidate:3600}})
  
  if (!res.ok) {
    throw new Error("Something went wrong")
  }
  return res.json();
}

export const metadata = {
  title: {
    default: 'Projects',
    template: '%s - RJTuttle.com'
  },
  description: 'Software Development & Engineering Projects Page',
};

const ProjectsPage = async () => {
  
  //const posts = await getPosts("projects")
  const posts = await getData();

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