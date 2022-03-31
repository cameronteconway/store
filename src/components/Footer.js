import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='wrapper'>
                <div className='footer-container'>
                    <div class='links'>
                        <a href='/#'>Shipping</a>
                        <a href='/#'>FAQs</a>
                        <a href='/#'>Returns</a>
                        <a href='/#'>Terms of Service</a>
                        <a href='/#'>Jobs</a>
                        <a href='/#'>Refund Policy</a>
                    </div>
                    <div class='logo-repeat'>
                        <span>COMWRYN</span>
                        <span>COMWRYN</span>
                        <span>COMWRYN</span>
                        <span>
                            ©{' '}
                            <a href='https://cameronconway.co.uk'>
                                Cameron Conway
                            </a>{' '}
                            2022
                        </span>
                    </div>
                </div>
                {/* <p>copyright</p> */}
            </div>
        </footer>
    );
};

export default Footer;
