import React from 'react'
import Account from './Account';
import Menu from '../Menu/Menu'
import NavHeader from '../UI/NavHeader';
const AccountPage = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <>  <NavHeader notSticky={true} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Menu isMenuOpen={isMenuOpen} />
            <Account isMenuOpen={isMenuOpen} />
        </>
    )
}

export default React.memo(AccountPage)
