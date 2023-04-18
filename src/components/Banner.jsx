import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import '../styles/Banner.css';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = ({ data }) => {
    const renderBanners = data.map((banner, i) => {
        let constinerClassName = `banner-slide banner-slide-${i + 1}`;
        let spanClassName = `banner-text banner-text-${i + 1}`;
        return (
            <SwiperSlide className={constinerClassName}>
                <img className='banner-img' src={banner.img} alt={banner.alt} />
                <span className={spanClassName}>{banner.text}</span>
            </SwiperSlide>
        );
    });

    return (
        <div className='banner-container'>
            <Swiper
                modules={[Navigation, Pagination]}
                // navigation
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {renderBanners}
            </Swiper>
        </div>
    );
};

export default Banner;
