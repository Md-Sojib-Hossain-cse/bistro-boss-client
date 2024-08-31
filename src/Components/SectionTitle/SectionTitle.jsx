import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading , textStyle }) => {
    return (
        <div className='py-6 md:py-8 lg:py-10 w-80 md:w-96 lg:w-[424px] mx-auto'>
            <p className='text-[#D99904] text-base lg:text-lg xl:text-xl text-center'>--- {subHeading} ---</p>
            <h3 className={`${textStyle === "white" ? "text-white" : "text-[#151515]"} text-2xl md:text-3xl lg:text-4xl text-center py-2 my-2 border-y-4 border-gray-200 uppercase`}>{heading}</h3>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    textStyle: PropTypes.string,
}

export default SectionTitle;