import React from 'react';

import './Explore.css';

const Explore = () => {
    return (
        <section>
            <div className='wrapper'>
                <div className='explore-container'>
                    <div className='explore-item'>
                        <img
                            src='/images/bags.png'
                            alt='Pair of hands holding a black handbag infront of a yellow background'
                        />

                        <span>Bags</span>
                    </div>
                    <div className='explore-item'>
                        <img
                            src='/images/glasses.png'
                            alt='A pair of gold framed glasses on a marble surface'
                        />

                        <span>Glasses</span>
                    </div>
                    <div className='explore-item'>
                        <img
                            src='/images/shoes.png'
                            alt='A pair of shoes on a white surface infront of a blue background'
                        />

                        <span>Shoes</span>
                    </div>
                    <div className='explore-item'>
                        <img
                            src='/images/discover.png'
                            alt='A woman with flamboyant pink makeup wearing a matching pink dress'
                        />

                        <span>Discover</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Explore;
