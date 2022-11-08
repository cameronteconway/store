import '../styles/SocialLink.css';

const SocialLink = ({ data }) => {
    return (
        <a href='/#'>
            <i className={`bi bi-${data.id}`}></i>
        </a>
    );
};

export default SocialLink;
