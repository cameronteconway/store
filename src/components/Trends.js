import React from 'react';

import './Trends.css';

const Trends = () => {
    return (
        <section>
            <div className='wrapper'>
                <div className='trends-container'>
                    <div className='trend-item'>
                        <a href='/#'>
                            <div className='img-container'>
                                <img
                                    src='/images/red_dress_orange_background.png'
                                    alt='Woman wearing a red dress on an orange background'
                                />
                                <span>DRESSES</span>
                            </div>
                        </a>
                    </div>

                    <div className='trend-item'>
                        <a href='/#'>
                            <div className='img-container'>
                                <img
                                    src='/images/yellow_jumpsuit_beach.png'
                                    alt='Woman next to the beach wearing a yellow two piece tracksuit'
                                />
                                <span>SUMMER</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trends;
