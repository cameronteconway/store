const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const addDays = (
    days: number
): { day: number; month: string; year: number } => {
    const date: Date = new Date();
    date.setDate(date.getDate() + days);
    const day: number = date.getDate();
    const month: string = months[date.getMonth()].substring(0, 3);
    const year: number = date.getFullYear();
    return { day, month, year };
};

// Banner
import banner1 from '../assets/woman-tube-background.jpg';
import banner2 from '../assets/woman-posing-background.jpg';
import banner3 from '../assets/woman-hat-sunny-background.jpg';

interface bannerImage {
    img: string;
    alt: string;
    text: string;
}

export const bannerImages: bannerImage[] = [
    {
        img: banner1,
        alt: 'Woman walking through London tube station',
        text: 'Stand out in a crowd',
    },
    {
        img: banner2,
        alt: 'Woman sitting on chair posing infront of white background',
        text: 'Black and white styles',
    },
    {
        img: banner3,
        alt: 'Woman walking through sunny European town',
        text: 'Summer Collection',
    },
];

// Blog
interface Blog {
    title: string;
    description: string;
    link: string;
    day: number;
    month: string;
    year: number;
    comments: number;
    minutes: number;
}

export const blogsData: Blog[] = [
    {
        title: 'The High Price of Fast Fashion',
        description:
            'Workers and the environment suffer as trendy, inexpensive clothes are swiftly mass produced in subcontracted factories and sold in chain stores world-wide.',
        link: 'https://www.wsj.com/articles/the-high-price-of-fast-fashion-11567096637',
        day: addDays(-7).day,
        month: addDays(-7).month,
        year: addDays(-7).year,
        comments: 12,
        minutes: 15,
    },
    {
        title: 'Klarna to Offer Pay Now Option Ahead of Crackdown',
        description:
            'The boom in the use of buy now, pay later has fuelled fears that it encourages people into debt.',
        link: 'https://www.bbc.co.uk/news/business-58948182',
        day: addDays(-13).day,
        month: addDays(-13).month,
        year: addDays(-13).year,
        comments: 23,
        minutes: 12,
    },
];

// Four Product Component
interface FourProductImage {
    img: string;
    alt: string;
}

import img1 from '../assets/yellow_jumpsuit_beach.jpg';
import img2 from '../assets/red_dress_orange_background.jpg';
import img3 from '../assets/straps_yellow_background.jpg';
import img4 from '../assets/yellow_dress_red_background.jpg';

export const womenProducts: FourProductImage[] = [
    {
        img: img1,
        alt: 'Woman on a basketball court on a sunny day wearing a yellow jumpsuit.',
    },
    {
        img: img2,
        alt: 'Woman posing over an orange background in a red dress.',
    },
    {
        img: img3,
        alt: 'Woman facing away from the camera over a yellow background, wearing a black strapped top.',
    },
    {
        img: img4,
        alt: 'Woman on a red background posing in a yellow dress.',
    },
];

// Footer
const information: string[] = [
    'Size guide',
    'Careers',
    'Store locator',
    'Privacy policy',
    'Disclaimer',
];
const customerService: string[] = [
    'FAQs',
    'Refund policy',
    'Work with us',
    'Sustainability',
    'Payment methods',
];
const delivery: string[] = [
    'UK Shipping',
    'European Shipping',
    'Worldwide Shipping',
    'UK Returns',
    'Returns outside UK',
];

interface FooterContent {
    title: string;
    links: string[];
}

export const footerContent: FooterContent[] = [
    { title: 'Information', links: information },
    { title: 'Customer Service', links: customerService },
    { title: 'Delivery', links: delivery },
];

interface SocialLink {
    id: string;
    text: string;
}

export const socialLinks: SocialLink[] = [
    {
        id: 'instagram',
        text: 'Link to our Instagram',
    },
    {
        id: 'linkedin',
        text: 'Link to our LinkedIn',
    },
    {
        id: 'snapchat',
        text: 'Link to our Snapchat',
    },
    {
        id: 'twitter',
        text: 'Link to our Twitter',
    },
    {
        id: 'wechat',
        text: 'Link to our WeChat',
    },
    {
        id: 'youtube',
        text: 'Link to our YouTube',
    },
    {
        id: 'telegram',
        text: 'Link to our Telegram',
    },
    {
        id: 'twitch',
        text: 'Link to our Twitch',
    },
];
