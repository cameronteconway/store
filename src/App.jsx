import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Banner from './components/Banner';
import FourProducts from './components/FourProducts';
import Signup from './components/Signup';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Guarantee from './components/Guarantees';
import DoubleProduct from './components/DoubleProduct';

import './styles/App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
    bannerImages,
    womenProducts,
    blogsData,
    doubleProduct,
    guaranteeDetails,
    footerContent,
    socialLinks,
} from './data/data';

const App = () => {
    return (
        <div>
            <Header />
            <main id='content'>
                <Banner data={bannerImages} />
                <FourProducts data={womenProducts} />
                <Signup />
                <Blogs data={blogsData} />
                {/* <DoubleProduct data={doubleProduct} /> */}
                {/* <Guarantee data={guaranteeDetails} /> */}
            </main>
            <Footer data={[footerContent, socialLinks]} />
        </div>
    );
};

createRoot(document.getElementById('root')).render(<App />);
