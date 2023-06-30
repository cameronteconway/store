import '../styles/FourProducts.scss';

interface Props {
    data: string[];
}

const FourProducts = ({ data }: Props) => {
    const renderProducts = data.map((product) => (
        <img className='four-products__image' src={product} />
    ));

    return (
        <section className='four-product-section'>
            <div className='wrapper'>
                <div className='four-products'>{renderProducts}</div>
            </div>
        </section>
    );
};

export default FourProducts;
