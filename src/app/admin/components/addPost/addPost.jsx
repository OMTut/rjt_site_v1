"use client";
import {useSearchParams} from 'next/navigation'
import {addPost} from "@/lib/actions/addPost"
import dynamic from 'next/dynamic'
import styles from "./addPost.module.css"

const CustomEditor = dynamic( () => {
    return import( './../custom-editor/custom-editor' );
  }, { ssr: false } );

const AddPost = () => {
    const searchParams = useSearchParams()
    const category = searchParams.get("categoryName")
    
    return (
        <div className={styles['addpost-container']}>
            <form action = {addPost}>
            <div className={styles.inputTitle}>Select {category} Title:</div>
                <input type="text" placeholder="Title" name="title" />
                <div className={styles.inputTitle}>Create {category}:</div>
                <CustomEditor initialData='Write Content'/>
                {/*<input type="text" placeholder="Write Content" name="content" />*/}
                <div className={styles.inputTitle}>Set {category} Summary:</div>
                <CustomEditor initialData='Write Summary'/>
                {/*<input type="text" placeholder="Write Summary" name="summary" />*/}
                <button className={`${styles.button} ${styles.view}`}>Add Post</button>
            </form>
        </div>
    )
}

export default AddPost