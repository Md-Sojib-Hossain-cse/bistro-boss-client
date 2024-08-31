import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Cart/Cart/Cart";
import AllUsers from "../Pages/AllUsers/AllUsers/AllUsers";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UserHome from "../Pages/UserHome/UserHome/UserHome";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/secret",
                element: <PrivateRoute>
                    <Secret></Secret>
                </PrivateRoute>
            },
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "dashboard",
        element: <PrivateRoute>
            <Dashboard></Dashboard>
        </PrivateRoute>,
        children: [
            {
                path: "cart",
                element: <Cart></Cart>,
            },
            {
                path: "payment",
                element: <Payment></Payment>,
            },
            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
            {
                path: "paymentHistory",
                element: <PaymentHistory></PaymentHistory>
            },

            // admin routes
            {
                path: "adminHome",
                element: <AdminRoute>
                    <AdminHome></AdminHome>
                </AdminRoute>
            },
            {
                path: "allUsers",
                element: <AdminRoute>
                    <AllUsers></AllUsers>
                </AdminRoute>
            },
            {
                path: "addItems",
                element: <AdminRoute>
                    <AddItems></AddItems>
                </AdminRoute>,
            },
            {
                path: "manageItems",
                element: <AdminRoute>
                    <ManageItems></ManageItems>
                </AdminRoute>,
            },
            {
                path: "updateItem/:id",
                element: <AdminRoute>
                    <UpdateItem></UpdateItem>
                </AdminRoute>,
                loader : ({params}) => fetch(`https://bistro-boss-server-kappa-mauve.vercel.app/menu/${params.id}`)
            },
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
]);


export default router;