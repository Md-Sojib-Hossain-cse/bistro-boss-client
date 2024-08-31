import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCards from "../../../hooks/useCards";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [cart] = useCards();
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logout()
            .then(() => {
                Swal.fire({
                    title: "User Logged out Successfully",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                    `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                    `
                    }
                });
            })
            .catch(error => {
                console.log(error)
            })
    }


    const navOptions = <>
        <li className="text-white"><NavLink to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeLink" : ""
            }
        >Home</NavLink></li>
        <li className="text-white"><NavLink to="/contactUs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeLink" : ""
            }
        >Contact Us</NavLink></li>
        <li className="text-white"><NavLink to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeLink" : ""
            }
        >Dashboard</NavLink></li>
        <li className="text-white"><NavLink to="/menu"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeLink" : ""
            }
        >Our Menu</NavLink></li>
        <li className="text-white"><NavLink to="/order/salads"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeLink" : ""
            }
        >Order food</NavLink></li>
        <li className="text-white"><NavLink to="/secret"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeLink" : ""
            }
        >Secret Things</NavLink></li>

        {
            user && isAdmin && <li className="text-white"><NavLink to="/dashboard/adminHome"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeLink" : ""
                }
            >Dashboard</NavLink></li>
        }
        {
            user && !isAdmin && <li className="text-white"><NavLink to="/dashboard/userHome"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "activeLink" : ""
                }
            >Dashboard</NavLink></li>
        }

        <li className="text-white"><NavLink to="dashboard/cart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "activeLink" : ""
            }
        >
            <button className="btn">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </NavLink></li>
    </>


    return (
        <div className="navbar fixed z-10 bg-[#13131344] text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase font-bold text-base md:text-lg">
                        {navOptions}
                    </ul>
                </div>
                <a className="text-xl md:text-2xl lg:text-3xl font-black tracking-tighter flex flex-col justify-center items-center">
                    <span>Bistro Boss</span>
                    <span className="text-lg md:text-xl lg:text-2xl font-bold tracking-widest">Restaurant</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 uppercase font-bold text-base">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <div>
                        <span>{user?.displayName}</span>
                        <button onClick={handleLogOut} className="btn btn-ghost">Sign Out</button>
                    </div>
                    : <NavLink to="/login"><button className="btn btn-ghost">Log in</button></NavLink>}
            </div>
        </div>
    );
};

export default Navbar;