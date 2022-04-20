import React from 'react';

import './SocialSignup.css';

const SocialSignup = () => {
    return (
        <section>
            <div className='wrapper'>
                <div className='socialSignup-container'>
                    <div className='signup'>
                        <h2 className='section-title'>Newletter</h2>
                        <p>
                            Sign up to recieve email updates on new product
                            announcements, gift ideas, special promotions, slaes
                            and more.
                        </p>
                    </div>
                    <div className='social'>
                        <h2 className='section-title'>Social</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialSignup;
