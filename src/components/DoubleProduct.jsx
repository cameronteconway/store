import '../styles/DoubleProduct.css';

import img1 from '../assets/yellow_jumpsuit_beach.png';
import img2 from '../assets/red_dress_orange_background.png';

const DoubleProduct = ({ data }) => {
    return (
        <section>
            <div className='wrapper'>
                <div className='double-product-container'>
                    <a href='/#' className='single-product'>
                        <div className='img-container'>
                            <img src={img1} alt={data[0].alt} />
                        </div>
                        <div className='product-info'>
                            <span>{data[0].text}</span>
                        </div>
                    </a>

                    <a href='/#' className='single-product'>
                        <div className='img-container'>
                            <img src={img2} alt={data[1].alt} />
                        </div>
                        <div className='product-info'>
                            <span>{data[1].text}</span>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default DoubleProduct;
