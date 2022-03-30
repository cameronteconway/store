import React from 'react';

import './Blog.css';

const Blog = ({ content }) => {
    return (
        <article>
            <div className='blog-item'>
                <span className='blog-title'>{content.title}</span>
                <span className='blog-date'>
                    {content.day} {content.month}, {content.year}
                </span>
                <p>{content.description}</p>
                <a href={content.link} className='read-more'>
                    Read More
                </a>
                <div className='blog-detail'>
                    <span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-chat-fill inline-block'
                            viewBox='0 0 16 16'
                        >
                            <path d='M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z' />
                        </svg>
                        {content.comments} comment(s)
                    </span>

                    <span>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            fill='currentColor'
                            className='bi bi-clock-fill inline-block'
                            viewBox='0 0 16 16'
                        >
                            <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z' />
                        </svg>
                        {content.minutes} min(s)
                    </span>
                </div>
            </div>
        </article>
    );
};

export default Blog;
