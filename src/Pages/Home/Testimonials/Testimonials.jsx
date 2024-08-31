import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://bistro-boss-server-kappa-mauve.vercel.app/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="mb-8 md:mb-12 lg:mb-20">
            <SectionTitle
                subHeading="What Our Clients Say"
                heading="TESTIMONIALS"
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map((review) => <SwiperSlide
                            key={review._id}
                        >
                            <div className="py-8 md:py-12 px-8 md:px-16">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                    className="mx-auto mb-3"
                                />
                                <FaQuoteLeft className="mx-auto my-4 text-4xl md:text-6xl lg:text-8xl"></FaQuoteLeft>
                                <p className="text-center text-sm md:text-balance">{review.details}</p>
                                <h3 className="text-lg md:text-xl lg:text-2xl text-[#CD9003] text-center uppercase">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;