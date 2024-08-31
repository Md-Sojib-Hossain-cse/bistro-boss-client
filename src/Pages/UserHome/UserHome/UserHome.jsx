import { FaCreditCard } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className="text-2xl">
                <span>Hi , Welcome </span>
                {
                    user?.displayName ? user?.displayName : "Back"
                }!
            </h2>
            <div className="grid md:grid-cols-6 gap-6 mt-6">
                <div className="bg-red-400 md:col-span-2 py-4 flex gap-4 justify-center items-center text-white rounded-lg bg-gradient-to-r from-violet-400 via-violet-300 to-violet-50">
                    <FaCreditCard className="text-4xl"></FaCreditCard>
                    <div>
                        <h3 className="text-3xl font-semibold">205</h3>
                        <p>Menu</p>
                    </div>
                </div>
                <div className="bg-red-400 md:col-span-2 py-4 flex gap-4 justify-center items-center text-white rounded-lg bg-gradient-to-r from-orange-400 via-orange-300 to-orange-50">
                    <FaCreditCard className="text-4xl"></FaCreditCard>
                    <div>
                        <h3 className="text-3xl font-semibold">103</h3>
                        <p>Shop</p>
                    </div>
                </div>
                <div className="bg-red-400 md:col-span-2 py-4 flex gap-4 justify-center items-center text-white rounded-lg bg-gradient-to-r from-pink-400 via-pink-300 to-pink-50">
                    <FaCreditCard className="text-4xl"></FaCreditCard>
                    <div>
                        <h3 className="text-3xl font-semibold">03</h3>
                        <p>Contact</p>
                    </div>
                </div>
                <div className="bg-red-400 md:col-span-3 h-12"></div>
                <div className="bg-red-400 md:col-span-3 h-12"></div>
            </div>
        </div>
    );
};

export default UserHome;