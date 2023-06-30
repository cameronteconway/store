import Blog from './Blog';

import '../styles/Blogs.scss';

interface BlogsData {
    title: string;
    description: string;
    link: string;
    day: number;
    month: string;
    year: number;
    comments: number;
    minutes: number;
}

interface Props {
    data: BlogsData[];
}

const Blogs = ({ data }: Props) => {
    const renderBlogs = data.map((content: BlogsData, index: number) => {
        return <Blog key={index} content={content} />;
    });

    return (
        <section>
            <div className='wrapper'>
                <h2 className='section-title'>THE BLOG</h2>
                <div className='blog-container'>{renderBlogs}</div>
                <a className='blogs-link' href='/#'>
                    MORE BLOGS{' '}
                    <span className='blogs-link__arrow'>&#8594;</span>
                </a>
            </div>
        </section>
    );
};

export default Blogs;
