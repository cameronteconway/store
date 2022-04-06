import React from 'react';

import './Signup.css';

const Signup = () => {
    return (
        <section>
            <div className='colour-block-signup'>
                <div className='wrapper'>
                    <div className='signup-container'>
                        <div className='newsletter'>
                            <a href='/#'>
                                <h2>SIGN UP TO THE NEWSLETTER</h2>
                            </a>
                        </div>
                        <span className='weekly'>Weekly updates</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
