import '../styles/DoubleProduct.css';

const DoubleProduct = ({ data }) => {
    return (
        <section>
            <div className='wrapper'>
                <div className='double-product-container'>
                    <a href='/#' className='single-product'>
                        <div className='img-container'>
                            <img src={data[0].image} alt={data[0].alt} />
                        </div>
                        <div className='product-info'>
                            <span>{data[0].text}</span>
                        </div>
                    </a>

                    <a href='/#' className='single-product'>
                        <div className='img-container'>
                            <img src={data[1].image} alt={data[1].alt} />
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
