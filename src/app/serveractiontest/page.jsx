import {addPost, deletePost} from "@/lib/action"

const ServerActionTestPage = () => {
    return (
        <div>
            <form action = {addPost}>
                <select name = "category" required>
                    <option value="">Select Category</option>
                    <option value="thoughts">Thoughts</option>
                    <option value="projects">Projects</option>
                </select>
                <input type="text" placeholder="Title" name="title"/>
                <input type="text" placeholder="Write Content" name="content" />
                <input type="text" placeholder="Write Summary" name="summary" />
                <button>Test me</button>
            </form>
            <form action = {deletePost}>
                <input type="text" placeholder="Post ID" name="post_id"/>
                <button>Delete me</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage