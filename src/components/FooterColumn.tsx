import '../styles/FooterColumn.scss';

interface footerContent {
    title: string;
    links: string[];
}

interface Props {
    data: footerContent;
}

const FooterColumn = ({ data }: Props) => {
    const renderColumn = data.links.map((item, index) => (
        <a className='footer-column__link' href='/#' key={index}>
            {item}
        </a>
    ));

    return (
        <div className='footer-column'>
            <span className='footer-column__title'>{data.title}</span>
            {renderColumn}
        </div>
    );
};

export default FooterColumn;
