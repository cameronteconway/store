import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='wrapper'>
                <div className='footer-container'>
                    <div className='links'>
                        <span className='footer-column-title'>Delivery</span>
                        <a className='link' href='/#'>
                            UK Shipping
                        </a>
                        <a className='link' href='/#'>
                            European Shipping
                        </a>
                        <a className='link' href='/#'>
                            Worldwide Shipping
                        </a>
                        <a className='link' href='/#'>
                            UK Returns
                        </a>
                        <a className='link' href='/#'>
                            Returns ourside UK
                        </a>
                    </div>
                    <div className='links'>
                        <span className='footer-column-title'>Information</span>
                        <a className='link' href='/#'>
                            FAQs
                        </a>
                        <a className='link' href='/#'>
                            Terms of Service
                        </a>
                        <a className='link' href='/#'>
                            Careers
                        </a>
                        <a className='link' href='/#'>
                            Refund Policy
                        </a>
                    </div>
                </div>
                <div className='copyright'>
                    <span>
                        ©{' '}
                        <a href='https://cameronconway.co.uk'>Cameron Conway</a>{' '}
                        2022
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
