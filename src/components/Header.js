import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <h1>COMWRYN</h1>
            <div className='nav-links'>
                <a href='#'>clothing</a>
                <a href='#'>brands</a>
                <a href='#'>sale</a>
                <a href='#'>contact</a>
            </div>
        </header>
    );
};

export default Header;
