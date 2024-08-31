import PropTypes from "prop-types";

const MenuItem = ({item}) => {

    const {name , image , recipe , price} = item;


    return (
        <div className="flex justify-between items-center gap-4 md:gap-6">
            <img src={image} alt="" className="bg-[#D9D9D9] w-24 h-20 md:w-[118px] md:h-[104px] rounded-full rounded-tl-none"/>
            <div className="basis-full">
                <h3 className="text-[#151515] text-base md:text-lg lg:text-xl mb-2 uppercase">{name}---------------</h3>
                <p className="text-[#737373] text-sm lg:text-base">{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-sm md:text-base lg:text-lg">${price}</p>
        </div>
    );
};

MenuItem.propTypes = {
    item : PropTypes.object,
}

export default MenuItem;