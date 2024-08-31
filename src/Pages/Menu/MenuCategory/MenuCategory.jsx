import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import PropTypes from "prop-types";

const MenuCategory = ({ items, img, heading, details }) => {
    return (
        <div>
            {heading && <Cover
                bgImg={img}
                heading={heading}
                details={details}
            ></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-10 lg:mb-12 mt-4 md:mt-6 lg:mt-8 px-6 md:px-10 lg:px-16">
                {
                    items.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
            <div className="text-center my-4">
                <Link to={`/order/${heading}`}>
                    <button className="btn btn-outline border-0 border-b-4 uppercase">Order Your Favorite Food</button>
                </Link>
            </div>
        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.array,
    img: PropTypes.string,
    heading: PropTypes.string,
    details: PropTypes.string,
}

export default MenuCategory;