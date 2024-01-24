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
            <div className={styles.inputTitle}>Select {category} Title:</div>
                <input type="text" placeholder="Title" name="title" />
                <div className={styles.inputTitle}>Create {category}:</div>
                <input type="text" placeholder="Write Content" name="content" />
                <div className={styles.inputTitle}>Set {category} Summary:</div>
                <input type="text" placeholder="Write Summary" name="summary" />
                <button className={`${styles.button} ${styles.view}`}>Add Post</button>
            </form>
        </div>
    )
}

export default AddPost