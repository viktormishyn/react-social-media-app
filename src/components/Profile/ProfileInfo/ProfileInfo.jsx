import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.cover}
                     src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" alt="profile info img"/>
            </div>
            <div className={s.descriptionBlock}>
                Avatar and Description
            </div>
        </div>
    );
}

export default ProfileInfo;