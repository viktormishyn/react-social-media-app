import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, post: 'Hi, how are you?', likesCount: 12},
        {id: 2, post: 'My first post', likesCount: 3},
    ]

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                <Post message={postData[0].post} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].post} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;