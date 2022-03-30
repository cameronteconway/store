import React from 'react';

import './Social.css';

const Social = ({ content }) => {
    return (
        <section>
            <div className='colour-block'>
                <div className='wrapper'>
                    <div className='social-container'>
                        <div className='newsletter'>
                            <a href='/#'>
                                <h2>SIGN UP TO THE NEWSLETTER</h2>
                            </a>
                        </div>
                        <div className='social-links'>
                            <a href='/#'>FACEBOOK</a>
                            <a href='/#'>INSTAGRAM</a>
                            <a href='/#'>TWITTER</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Social;
