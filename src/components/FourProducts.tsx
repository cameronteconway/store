import '../styles/FourProducts.scss';

interface Product {
    img: string;
    alt: string;
}

interface Props {
    data: Product[];
}

const FourProducts = ({ data }: Props) => {
    const renderProducts = data.map((product: Product, index: number) => (
        <img
            className='four-products__image'
            key={index}
            src={product.img}
            alt={product.alt}
        />
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
