const months = [
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

const addDays = (days) => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const day = date.getDate();
    const month = months[date.getMonth()].substring(0, 3);
    const year = date.getFullYear();
    return { day, month, year };
};

// Banner
import banner1 from '../assets/woman-tube-background.jpg';
import banner2 from '../assets/woman-posing-background.jpg';
import banner3 from '../assets/woman-hat-sunny-background.jpg';

export const bannerImages = [
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
export const blogsData = [
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

export const doubleProduct = [
    {
        image: '/assets/yellow_jumpsuit_beach.png',
        alt: 'Woman next to the beach wearing a yellow two piece tracksuit',
        text: 'summer',
    },
    {
        image: '/assets/red_dress_orange_background.png',
        alt: 'Woman wearing a red dress on an orange background',
        text: 'dresses',
    },
];

export const guaranteeDetails = [
    {
        title: 'Free Shipping',
        iconId: 'truck',
        text: 'Free Shipping on all orders',
    },
    {
        title: 'Online Support',
        iconId: 'headset',
        text: 'Support online 24/7',
    },
    {
        title: 'Money Return',
        iconId: 'wallet2',
        text: 'Money back guarantee',
    },
    {
        title: 'Secure Payment',
        iconId: 'credit-card',
        text: 'Protect your details',
    },
];

// Four Product Component
import img1 from '../assets/yellow_jumpsuit_beach.jpg';
import img2 from '../assets/red_dress_orange_background.jpg';
import img3 from '../assets/straps_yellow_background.jpg';
import img4 from '../assets/yellow_dress_red_background.jpg';

export const womenProducts = [img1, img2, img3, img4];

// Footer
const information = [
    'Size guide',
    'Careers',
    'Store locator',
    'Privacy policy',
    'Disclaimer',
];
const customerService = [
    'FAQs',
    'Refund policy',
    'Work with us',
    'Sustainability',
    'Payment methods',
];
const delivery = [
    'UK Shipping',
    'European Shipping',
    'Worldwide Shipping',
    'UK Returns',
    'Returns outside UK',
];

export const footerContent = [
    { Information: information },
    { 'Customer Service': customerService },
    { Delivery: delivery },
];

export const socialLinks = [
    {
        id: 'instagram',
    },
    {
        id: 'linkedin',
    },
    {
        id: 'snapchat',
    },
    {
        id: 'twitter',
    },
    {
        id: 'wechat',
    },
    {
        id: 'youtube',
    },
    {
        id: 'telegram',
    },
    {
        id: 'twitch',
    },
];
