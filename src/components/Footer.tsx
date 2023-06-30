import FooterColumn from './FooterColumn';
import SocialLink from './SocialLink';

import '../styles/Footer.scss';

interface FooterContent {
    title: string;
    links: string[];
}

interface SocialLinks {
    id: string;
}

interface Props {
    data: [FooterContent[], SocialLinks[]];
}

const Footer = ({ data }: Props) => {
    const renderColumns: JSX.Element[] = data[0].map((column, index) => (
        <FooterColumn data={column} key={index} />
    ));

    const renderSocialLinks: JSX.Element[] = data[1].map((link, index) => (
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
