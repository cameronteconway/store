import React from 'react';
import Header from './Header';
import Blogs from './Blogs';
import Social from './Social';

import './App.css';

import { blogsData } from '../data/data';

const App = () => {
    return (
        <div>
            <Header />
            <main id='content'>
                <Blogs data={blogsData} />
                <Social />
            </main>
        </div>
    );
};

export default App;
