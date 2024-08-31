import PropTypes from "prop-types";
import { Parallax } from 'react-parallax';

const Cover = ({ bgImg, heading, details }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={bgImg}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div
                className="hero h-80 md:h-[500px] lg:h-[650px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="px-6 md:px-12 lg:px-20">
                        <h1 className="mb-5 text-white text-3xl md:text-4xl lg:text-6xl font-bold">{heading}</h1>
                        <p className="mb-5 text-white text-base md:text-lg lg:text-xl font-semibold">{details}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

Cover.propTypes = {
    bgImg: PropTypes.string,
    heading: PropTypes.string,
    details: PropTypes.string,
}

export default Cover;