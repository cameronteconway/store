import { useEffect } from 'react';

import '../styles/Header.scss';

const Header = () => {
    useEffect(() => {
        window.onscroll = () => {
            const scrollTop =
                window.scrollY !== undefined
                    ? window.scrollY
                    : (
                          document.documentElement ||
                          document.body.parentNode ||
                          document.body
                      ).scrollTop;
            if (scrollTop > 102) {
                (
                    document.querySelector(
                        '.header--sticky'
                    ) as HTMLInputElement
                ).classList.remove('hide');
                (
                    document.querySelector(
                        '.header--sticky'
                    ) as HTMLInputElement
                ).classList.add('show');
            } else {
                (
                    document.querySelector(
                        '.header--sticky'
                    ) as HTMLInputElement
                ).classList.add('hide');
                (
                    document.querySelector(
                        '.header--sticky'
                    ) as HTMLInputElement
                ).classList.remove('show');
            }
        };
    }, []);

    return (
        <header>
            <div className='header header--static '>
                <h1 className='header__title'>COMWRYN</h1>
                <div className='header__nav-links'>
                    <a className='header__link' href='/#'>
                        clothing
                    </a>
                    <a className='header__link' href='/#'>
                        brands
                    </a>
                    <a className='header__link' href='/#'>
                        sale
                    </a>
                    <a className='header__link' href='/#'>
                        contact
                    </a>
                </div>
            </div>

            <div className='header header--sticky hide'>
                <div className='header__wrapper'>
                    <h1 className='header__title'>COMWRYN</h1>
                    <div className='header__nav-links'>
                        <a className='header__link' href='/#'>
                            clothing
                        </a>
                        <a className='header__link' href='/#'>
                            brands
                        </a>
                        <a className='header__link' href='/#'>
                            sale
                        </a>
                        <a className='header__link' href='/#'>
                            contact
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
