import Header from './Header';
import Blogs from './Blogs';
// import Signup from './Signup';
import Guarantee from './Guarantees';
import Footer from './Footer';
// import SingleProduct from './SingleProduct';
import DoubleProduct from './DoubleProduct';

import '../styles/App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
    blogsData,
    // singleProduct,
    doubleProduct,
    guaranteeDetails,
    footerContent,
    socialLinks,
} from '../data/data';

const App = () => {
    return (
        <div>
            <Header />
            <main id='content'>
                {/* <SingleProduct data={singleProduct} /> */}
                <DoubleProduct data={doubleProduct} />
                {/* <Signup /> */}
                <Guarantee data={guaranteeDetails} />
                <Blogs data={blogsData} />
            </main>
            <Footer data={[footerContent, socialLinks]} />
        </div>
    );
};

export default App;
