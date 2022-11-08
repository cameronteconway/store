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

const addDays = days => {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const day = date.getDate();
    const month = months[date.getMonth()].substring(0, 3);
    const year = date.getFullYear();
    return { day, month, year };
};

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

export const singleProduct = {
    image: '/images/windbreaker-landscape.jpg',
    alt: 'Colourful coats hung up around a room infront of a white background',
    text: 'coats',
};

// export const singleProduct2 = {
//     image: '/images/red_dress_orange_background.png',
//     alt: 'Woman wearing a red dress on an orange background',
//     text: 'dresses',
// };

export const doubleProduct = [
    {
        image: '/images/yellow_jumpsuit_beach.png',
        alt: 'Woman next to the beach wearing a yellow two piece tracksuit',
        text: 'summer',
    },
    {
        image: '/images/red_dress_orange_background.png',
        alt: 'Woman wearing a red dress on an orange background',
        text: 'dresses',
    },
];

// export const doubleProduct2 = [
//     {
//         image: '/images/glasses.png',
//         alt: 'A pair of gold framed glasses on a marble surface',
//     },
//     {
//         image: '/images/discover.png',
//         alt: 'A woman with flamboyant pink makeup wearing a matching pink dress',
//     },
// ];

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
