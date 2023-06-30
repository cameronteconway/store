import '../styles/SocialLink.scss';

interface SocialLinks {
    id: string;
}

interface Props {
    data: SocialLinks;
}

const SocialLink = ({ data }: Props) => {
    return (
        <a className='social-link' href='/#'>
            <i className={`bi bi-${data.id}`}></i>
        </a>
    );
};

export default SocialLink;
