"use client";
import {useSearchParams} from 'next/navigation'
import {addPost} from "@/lib/actions/addPost"
import styles from "./addPost.module.css"

const AddPost = () => {
    const searchParams = useSearchParams()
    const category = searchParams.get("categoryName")
    
    return (
        <div className={styles.container}>
            <form action = {addPost}>
            <div>Select {category} posttype:</div>
                <input type="text" placeholder="Title" name="title"/>
                <input type="text" placeholder="Write Content" name="content" />
                <input type="text" placeholder="Write Summary" name="summary" />
                <button className={`${styles.button} ${styles.view}`}>Add Post</button>
            </form>
        </div>
    )
}

export default AddPost