import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Banner.css"

import Slider1 from "../../../assets/home/01.jpg"
import Slider2 from "../../../assets/home/02.jpg"
import Slider3 from "../../../assets/home/03.png"
import Slider4 from "../../../assets/home/04.jpg"
import Slider5 from "../../../assets/home/05.png"
import Slider6 from "../../../assets/home/06.png"

const Banner = () => {
    return (
        <Carousel className="mb-8 md:mb-12 lg:mb-20" autoPlay infiniteLoop>
            <div className="h-96 md:h-[550px] lg:[750px] xl:h-[804px]">
                <img src={Slider1} className="h-full w-full object-cover" />
            </div>
            <div className="h-96 md:h-[550px] lg:[750px] xl:h-[804px]">
                <img src={Slider2} className="h-full w-full object-cover" />
            </div>
            <div className="h-96 md:h-[550px] lg:[750px] xl:h-[804px]">
                <img src={Slider3} className="h-full w-full object-cover" />
            </div>
            <div className="h-96 md:h-[550px] lg:[750px] xl:h-[804px]">
                <img src={Slider4} className="h-full w-full object-cover" />
            </div>
            <div className="h-96 md:h-[550px] lg:[750px] xl:h-[804px]">
                <img src={Slider5} className="h-full w-full object-cover" />
            </div>
            <div className="h-96 md:h-[550px] lg:[750px] xl:h-[804px]">
                <img src={Slider6} className="h-full w-full object-cover" />
            </div>
        </Carousel>
    );
};

export default Banner;