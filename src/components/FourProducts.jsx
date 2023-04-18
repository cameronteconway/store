import '../styles/FourProducts.css';

const FourProducts = ({ data }) => {
    const renderProducts = data.map((product) => (
        <img class='four-product-image' src={product} />
    ));

    return (
        <section className='four-product-section'>
            <div className='wrapper'>
                <div className='four-product-container'>{renderProducts}</div>
            </div>
        </section>
    );
};

export default FourProducts;
