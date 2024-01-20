

//api call
const getData = async () => {
  const res = await fetch('https://localhost:3000/api/posts', {next:{revalidate:3600}})
  
  if (!res.ok) {
    throw new Error("Something went wrong")
  }
  return res.json();
}

const ProjectsPage = async () => {
  
  
    //get Data with an api call
    const posts = await getData();

    //Get Data witout an api
    //const posts = await getPosts("projects")

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