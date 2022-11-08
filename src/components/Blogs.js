import Blog from './Blog';

import '../styles/Blogs.css';

const Blogs = ({ data }) => {
    const renderBlogs = data.map((content, index) => {
        return <Blog key={index} content={content} />;
    });

    return (
        <section>
            <div className='wrapper'>
                <h2 className='section-title'>THE BLOG</h2>
                <div className='blog-container'>{renderBlogs}</div>
                <a className='blogs-read-more' href='/#'>
                    MORE BLOGS <span>&#8594;</span>
                </a>
            </div>
        </section>
    );
};

export default Blogs;
