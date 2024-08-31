import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Slide1 from "../../../assets/home/slide1.jpg"
import Slide2 from "../../../assets/home/slide2.jpg"
import Slide3 from "../../../assets/home/slide3.jpg"
import Slide4 from "../../../assets/home/slide4.jpg"
import Slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"From 11:00am to 10:00pm"}
            heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-8 md:mb-12 lg:mb-20 xl:h-[450px]"
            >
                <SwiperSlide className='relative'>
                    <img src={Slide1} alt="" />
                    <h3 className='text-base md:text-xl lg:text-2xl uppercase text-center text-white absolute bottom-4 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={Slide2} alt="" />
                    <h3 className='text-base md:text-xl lg:text-2xl uppercase text-center text-white absolute bottom-4 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={Slide3} alt="" />
                    <h3 className='text-base md:text-xl lg:text-2xl uppercase text-center text-white absolute bottom-4 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={Slide4} alt="" />
                    <h3 className='text-base md:text-xl lg:text-2xl uppercase text-center text-white absolute bottom-4 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={Slide5} alt="" />
                    <h3 className='text-base md:text-xl lg:text-2xl uppercase text-center text-white absolute bottom-4 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2'>Salads</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;