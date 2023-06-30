import '../styles/FooterColumn.scss';

interface FooterContent {
    title: string;
    links: string[];
}

interface Props {
    data: FooterContent;
}

const FooterColumn = ({ data }: Props) => {
    const renderColumn = data.links.map((item: string, index: number) => (
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
