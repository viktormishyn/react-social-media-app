import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

    let posts = [
        {id: 1, post: 'Hi, how are you?', likesCount: 12},
        {id: 2, post: 'Boring post about something boring', likesCount: 3},
        {id: 2, post: 'A lot of work today', likesCount: 7},
        {id: 2, post: 'My first post', likesCount: 11},

    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
}

export default Profile;