import React from 'react';
import Header from './Header';
import Blogs from './Blogs';
// import Social from './Social';
// import Signup from './Signup';
import Footer from './Footer';
import SingleProduct from './SingleProduct';
import DoubleProduct from './DoubleProduct';

import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { blogsData, singleProduct, doubleProduct } from '../data/data';

const App = () => {
    return (
        <div>
            <Header />
            <main id='content'>
                <SingleProduct data={singleProduct} />
                {/* <Signup /> */}
                <DoubleProduct data={doubleProduct} />
                {/* <Social /> */}
                <Blogs data={blogsData} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
