import styles from "./addNew.module.css"
import Link from "next/link"
import { deletePost } from "@/lib/action"
import AddPost from "../components/addPost/addPost"

// const getData = async () => {
//   const res = await fetch('http://localhost:3000/api/projects', {next:{revalidate:3600}})
//   if (!res.ok) {
//     throw new Error("Something went wrong")
//   }
//   return res.json();
// }

export const metadata = {
  title: {
    default: 'Projects',
    template: '%s - RJTuttle.com'
  },
  description: 'Software Development & Engineering Projects Page',
};

const addNewPage = async (postType) => {
  
  //const posts = await getPosts("projects")
//   const posts = await getData();
//   const count = posts.length;

  return (
    <div className= {styles.container}>
        <AddPost/>
    </div>
  );
}
  
export default addNewPage;