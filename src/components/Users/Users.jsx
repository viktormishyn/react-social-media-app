import s from './Users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: "https://www.shareicon.net/data/256x256/2016/06/25/786530_people_512x512.png",
                    followed: false,
                    fullName: "Ben",
                    status: "make it easy!",
                    location: {city: "London", country: "United Kingdom"}
                },
                {
                    id: 2,
                    photoUrl: "https://at-cdn-s02.audiotool.com/2020-05-27/users/drugs/avatar256x256-4ed4d644600947459e98332efbc552e7.jpg",
                    followed: true,
                    fullName: "Ivan",
                    status: "I like nice girls",
                    location: {city: "Moscow", country: "Russia"}
                },
                {
                    id: 3,
                    photoUrl: "https://i.pinimg.com/474x/3b/2a/e4/3b2ae4b99fcd5be3398009872c025263.jpg",
                    followed: true,
                    fullName: "Mary",
                    status: "I like bad boys=)",
                    location: {city: "Kiev", country: "Ukraine"}
                },
                {
                    id: 4,
                    photoUrl: "https://cdn.iconscout.com/icon/premium/png-256-thumb/female-student-avatar-1837115-1559163.png",
                    followed: true,
                    fullName: "Diana",
                    status: "trees are funny",
                    location: {city: "London", country: "United Kingdom"}
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users