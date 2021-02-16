import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://www.humanrightslogo.net/sites/default/files/HRLogoCMYK.svg" alt="img from internet"/>
            <div className={s.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </header>
    );
}

export default Header;