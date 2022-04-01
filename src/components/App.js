import React from 'react';
import Header from './Header';
import Blogs from './Blogs';
import Social from './Social';
import Trends from './Trends';
import Footer from './Footer';

import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { blogsData } from '../data/data';

const App = () => {
    return (
        <div>
            <Header />
            <main id='content'>
                <Blogs data={blogsData} />
                <Social />
                <Trends />
            </main>
            <Footer />
        </div>
    );
};

export default App;
