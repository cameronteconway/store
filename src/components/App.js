import React from 'react';
import Header from './Header';
import Blogs from './Blogs';
import Social from './Social';
import Trends from './Trends';

import './App.css';

import { blogsData } from '../data/data';

const App = () => {
    return (
        <div>
            <Header />
            <main id='content'>
                <Trends />
                <Blogs data={blogsData} />
                <Social />
                {/* https://www.flatspot.com/collections/t-shirts?page=4 */}
            </main>
        </div>
    );
};

export default App;
