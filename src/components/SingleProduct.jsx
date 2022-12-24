import '../styles/SingleProduct.css';

import img1 from '../assets/windbreaker-landscape.jpg';

const SingleProduct = ({ data }) => {
    return (
        <section>
            <div className='wrapper'>
                <div className='single-product-container'>
                    <a href='/#'>
                        <div className='img-container'>
                            <img src={img1} alt={data.alt} />
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
