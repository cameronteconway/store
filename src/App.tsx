import Header from './components/Header';
import Banner from './components/Banner';
import FourProducts from './components/FourProducts';
import Signup from './components/Signup';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

import './styles/App.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import {
    bannerImages,
    womenProducts,
    blogsData,
    footerContent,
    socialLinks,
} from './data/data';

const App = () => {
    console.log(womenProducts);
    return (
        <div>
            <Header />
            <main id='content'>
                <Banner data={bannerImages} />
                <FourProducts data={womenProducts} />
                <Signup />
                <Blogs data={blogsData} />
            </main>
            <Footer data={[footerContent, socialLinks]} />
        </div>
    );
};

export default App;
