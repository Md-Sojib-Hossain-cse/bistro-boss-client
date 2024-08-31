import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCards from "../../hooks/useCards";
const FoodCard = ({ item }) => {

    const { name, image, recipe, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [ , refetch] = useCards();

    const handleAddToCart = () => {
        if (user && user?.email) {
            //send item to the database
            console.log(user?.email);
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price
            }
            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        //refetch the items count
                        refetch();
                    }
                })
        }
        else {
            Swal.fire({
                title: "Currently no user logged in",
                text: "Please login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            });
        }
        console.log( user?.email)
    }

    return (
        <div className="card shadow-xl bg-[#F3F3F3] relative">
            <figure className="h-[300px] w-full">
                <img
                    src={image}
                    alt="cardImg"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h4 className="card-title">{name}</h4>
                <p>{recipe}</p>
                <p className="absolute top-6 right-6 bg-black w-16 p-1 text-white">${price}</p>
                <div className="card-actions">
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-outline border-0 border-b-4 uppercase text-[#BB8506] hover:text-[#BB8506]">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object,
}

export default FoodCard;