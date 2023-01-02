import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Signup from './components/Signup';
import Guarantee from './components/Guarantees';
import Footer from './components/Footer';
// import SingleProduct from './SingleProduct';
import DoubleProduct from './components/DoubleProduct';

import './styles/App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
    blogsData,
    // singleProduct,
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
                {/* <SingleProduct data={singleProduct} /> */}
                <DoubleProduct data={doubleProduct} />
                <Signup />
                {/* <Guarantee data={guaranteeDetails} /> */}
                <Blogs data={blogsData} />
            </main>
            <Footer data={[footerContent, socialLinks]} />
        </div>
    );
};

createRoot(document.getElementById('root')).render(<App />);
