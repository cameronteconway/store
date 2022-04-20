import React from 'react';

import './Signup.css';

const Signup = () => {
    return (
        <section>
            <div className='colour-block-signup'>
                <div className='wrapper'>
                    <div className='signup-container'>
                        {/* Be the first to know about our product launches and
                        exclusive offers. Members receive 10% off your first
                        purchase. */}
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
