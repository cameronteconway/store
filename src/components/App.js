import React from 'react';
import Header from './Header';
import Blogs from './Blogs';
import Social from './Social';
import Signup from './Signup';
import Footer from './Footer';
import SingleProduct from './SingleProduct';
import DoubleProduct from './DoubleProduct';
import SocialSignup from './SocialSignup';

import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
    blogsData,
    singleProduct1,
    doubleProduct1,
    singleProduct2,
    doubleProduct2,
} from '../data/data';

const App = () => {
    return (
        <div>
            <Header />
            <main id='content'>
                <SingleProduct data={singleProduct1} />
                <Signup />
                {/* <DoubleProduct data={doubleProduct1} /> */}
                {/* <SocialSignup /> */}
                <SingleProduct data={singleProduct2} />
                <Social />
                <Blogs data={blogsData} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
