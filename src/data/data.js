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
