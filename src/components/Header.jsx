import { useEffect } from 'react';

import '../styles/Header.css';

const Header = () => {
    useEffect(() => {
        window.onscroll = () => {
            let scrollTop =
                window.pageYOffset !== undefined
                    ? window.pageYOffset
                    : (
                          document.documentElement ||
                          document.body.parentNode ||
                          document.body
                      ).scrollTop;
            if (scrollTop > 102) {
                document
                    .querySelector('.sticky-header')
                    .classList.remove('hide');
                document.querySelector('.sticky-header').classList.add('show');
            } else {
                document.querySelector('.sticky-header').classList.add('hide');
                document
                    .querySelector('.sticky-header')
                    .classList.remove('show');
            }
        };
    }, []);

    return (
        <header>
            <div className='static-header'>
                <h1>COMWRYN</h1>
                <div className='nav-links'>
                    <a href='/#'>clothing</a>
                    <a href='/#'>brands</a>
                    <a href='/#'>sale</a>
                    <a href='/#'>contact</a>
                </div>
            </div>

            <div className='sticky-header hide'>
                <div className='header-wrapper'>
                    <h1>COMWRYN</h1>
                    <div className='nav-links'>
                        <a href='/#'>clothing</a>
                        <a href='/#'>brands</a>
                        <a href='/#'>sale</a>
                        <a href='/#'>contact</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
