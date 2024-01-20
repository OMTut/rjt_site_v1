
//api call
//Fetch data with an API

export const getData = async (slug) => {

    const res = await fetch(`https://localhost:3000/api/posts/${slug}`)
    if (!res.ok) { 
      throw new Error("something went wrong")
    }
    return res.json()
};

const SinglePostPage = async ({params}) => {
    const {slug} = params;
    
    //Fetch data with an API 
    const post = await getData(slug)

    if(!post) {
        return <div>Not Found</div>
    }

    return (
        
        <div className={styles.singlePostPageContainer}>
            <div className={styles.imgContainer}></div>
            <div className={styles.postContainer}>
                <h1 className={styles.title}>
                    {post?.post_title}
                </h1>
                <div className={styles.date}>
                    {post?.post_date?.toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </div>
                <div className={styles.content}>
                    {post?.post_content}
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage