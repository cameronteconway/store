import React from 'react';

import './SingleProduct.css';

const SingleProduct = ({ data }) => {
    return (
        <section>
            <div className='wrapper'>
                <div className='single-product-container'>
                    <a href='/#'>
                        <div className='img-container'>
                            <img src={data.image} alt={data.alt} />
                        </div>
                        <div className='product-info'>
                            <span>{data.text}</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SingleProduct;
