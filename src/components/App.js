import React from 'react';
import Header from './Header';
import Blogs from './Blogs';
import Explore from './Explore';
import Social from './Social';
import Signup from './Signup';
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
                <Trends />
                <Social />
                <Explore />
                <Signup />
                <Blogs data={blogsData} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
