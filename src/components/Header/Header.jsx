import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://www.humanrightslogo.net/sites/default/files/HRLogoCMYK.svg" alt="img from internet"/>
        </header>
    );
}

export default Header;