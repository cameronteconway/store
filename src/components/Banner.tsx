import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../styles/Banner.scss';

interface BannerImages {
    img: string;
    alt: string;
    text: string;
}

interface Props {
    data: BannerImages[];
}

const Banner = ({ data }: Props) => {
    const renderBanners = data.map((banner: BannerImages, index: number) => {
        let constinerClassName = `banner__slide banner__slide-${index + 1}`;
        let spanClassName = `banner__text banner__text-${index + 1}`;
        return (
            <SwiperSlide className={constinerClassName} key={index}>
                <img
                    className='banner__img'
                    src={banner.img}
                    alt={banner.alt}
                />
                <span className={spanClassName}>{banner.text}</span>
            </SwiperSlide>
        );
    });

    return (
        <div className='banner'>
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
