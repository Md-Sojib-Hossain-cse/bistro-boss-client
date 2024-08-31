import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCards from "../hooks/useCards";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCards();
    const [isAdmin ] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminHome">
                                        <FaHome></FaHome>Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addItems">
                                        <FaUtensils></FaUtensils>Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageItems">
                                        <FaList></FaList>Manage Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageBookings">
                                        <FaBook></FaBook>Manage Bookings
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allUsers">
                                        <FaUsers></FaUsers>All Users
                                    </NavLink>
                                </li>
                            </>
                            : <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>My Cart{cart.length}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar></FaCalendar>Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaAd></FaAd>Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaList></FaList>Payment History
                                    </NavLink>
                                </li></>
                    }

                    <div className="divider"></div>
                    {/* shared nav links */}
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch></FaSearch>Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact">
                            <FaEnvelope></FaEnvelope>Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-4 md:p-6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;