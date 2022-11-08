import '../styles/FooterColumn.css';

const FooterColumn = ({ data }) => {
    const renderColumn = Object.values(data)[0].map((item, index) => (
        <a className='link' href='/#' key={index}>
            {item}
        </a>
    ));

    return (
        <div className='footer-column'>
            <span className='footer-column-title'>{Object.keys(data)}</span>
            {renderColumn}
        </div>
    );
};

export default FooterColumn;
