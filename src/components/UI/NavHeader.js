import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/Tesla-logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './NavHeader.css';

const NavHeader = ({ notSticky, isMenuOpen, setIsMenuOpen }) => {
    const headerLinks = ["Model S", "Model 3", "Model X", "Model Y", "Solar Roof", "Solar Panels"];

    return (
        <div className={`header ${notSticky && 'notSticky'}`}>
            <div className="header__logo">
                <Link to='/'>
                    <img
                        className="header__logoImg"
                        src={logo} alt="Tesla Logo" />
                </Link>
            </div>
            <div className="header__links">
                {headerLinks.map((link, index) => <Link to="/" key={index}>{link}</Link>)}
            </div>
            <div className="header__right">
                <Link to="/" className={`shop ${isMenuOpen ? 'header__link--hidden' : ""}`}>Shop</Link>
                <Link to="/login" className={isMenuOpen ? 'header__link--hidden' : ""}>Account</Link>
                <div className='header__menu'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </div>
            </div>
        </div>
    )
}

export default NavHeader;


//this header is used in homepage and accountpage