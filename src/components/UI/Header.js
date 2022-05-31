import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import Logo from '../../assets/Tesla-logo.svg';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';

const Header = () => {
    return (
        <div className="login__header">
            <div className="login__logo">
                <Link to="/">
                    <img src={Logo} alt="Tesla Logo"></img>
                </Link>
            </div>
            <div className="login__language">
                <LanguageOutlinedIcon /> <span>en-US</span>
            </div>
        </div>

    )
}

export default Header

//this header is used in login and signup page