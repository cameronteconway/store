import '../styles/Guarantee.css';

const Guarantee = ({ guarantee }) => {
    return (
        <div className='guarantee-container'>
            <a href='/#'>
                <i className={`bi bi-${guarantee.iconId}`}></i>
            </a>
            <div className='guarantee-content'>
                <span className='guarantee-title'>{guarantee.title}</span>
                <span className='guarantee-text'>{guarantee.text}</span>
            </div>
        </div>
    );
};

export default Guarantee;
