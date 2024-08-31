import { Link } from "react-router-dom";
import ErrorImage from "../../assets/404.gif";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col gap-6 border-2">
            <div className="flex-1">
                <img src={ErrorImage} alt="" className="w-1/2 mx-auto"/>
            </div>
            <div className="text-center">
                <button className="btn text-white bg-orange-400"><Link to="/" className="flex gap-2">Back To Home <FaHome></FaHome></Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;