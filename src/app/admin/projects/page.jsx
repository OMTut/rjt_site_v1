"use client";
import styles from "./projects.module.css"
import Link from "next/link"
import Pagination from "../components/pagination/pagination"
import { deletePost } from "@/lib/action"

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/projects', {next:{revalidate:3600}})
  
  if (!res.ok) {
    throw new Error("Something went wrong")
  }
  return res.json();
}

// export const metadata = {
//   title: {
//     default: 'Projects',
//     template: '%s - RJTuttle.com'
//   },
//   description: 'Software Development & Engineering Projects Page',
// };

const ProjectsPage = async () => {
  
  //const posts = await getPosts("projects")
  const posts = await getData();
  const count = posts.length;

  return (
    <div className= {styles['addnew-container']}>
         <div className={styles.top}>
        {/*<Search placeholder="Search for a user..." />*/}
        <Link href={{pathname: '/admin/addNew', query: {categoryName: 'Project'} }}  >
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Last Modified</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.post_id}>
              <td>{post.post_title}</td>
              <td>{new Date(post?.created_on)?.toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`./projects/${post.slug}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deletePost}>
                    <input type="hidden" name="id" value={(post.post_id)} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
        
    </div>
  );
}
  
export default ProjectsPage;