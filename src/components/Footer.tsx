import FooterColumn from './FooterColumn';
import SocialLink from './SocialLink';

import '../styles/Footer.scss';

interface footerContent {
    title: string;
    links: string[];
}

interface socialLinks {
    id: string;
}

interface Props {
    data: [footerContent[], socialLinks[]];
}

const Footer = ({ data }: Props) => {
    const renderColumns = data[0].map((column, index) => (
        <FooterColumn data={column} key={index} />
    ));

    const renderSocialLinks = data[1].map((link, index) => (
        <SocialLink data={link} key={index} />
    ));

    return (
        <footer>
            <div className='wrapper'>
                <div className='footer'>
                    {renderColumns}
                    <div className='footer__final-column'>
                        <span className='footer__location'>
                            Location: GB (£)
                        </span>
                        <br />
                        <span className='footer__language'>
                            Language: English
                        </span>
                        <div className='footer__social-links'>
                            {renderSocialLinks}
                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <span className='copyright__content'>
                        ©{' '}
                        <a
                            className='copyright__link'
                            href='https://cameronconway.co.uk'
                        >
                            Cameron Conway
                        </a>{' '}
                        2022
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
