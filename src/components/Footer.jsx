import FooterColumn from './FooterColumn';
import SocialLink from './SocialLink';

import '../styles/Footer.css';

const Footer = ({ data }) => {
    const renderColumns = data[0].map((column, index) => (
        <FooterColumn data={column} key={index} />
    ));

    console.log(data[1]);
    const renderSocialLinks = data[1].map((link, index) => (
        <SocialLink data={link} key={index} />
    ));

    return (
        <footer>
            <div className='wrapper'>
                <div className='footer-container'>
                    {renderColumns}
                    <div className='final-column'>
                        <span>Location: GB (£)</span>
                        <br />
                        <span>Language: English</span>
                        <div className='social-links'>{renderSocialLinks}</div>
                    </div>
                </div>
                <div className='copyright'>
                    <span>
                        ©{' '}
                        <a href='https://cameronconway.co.uk'>Cameron Conway</a>{' '}
                        2022
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
