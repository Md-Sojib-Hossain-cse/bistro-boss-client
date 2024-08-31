import { Link, useNavigate } from "react-router-dom";
import LoginImg from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form"
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(result => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                        }
                        axiosPublic.post("/users", userInfo)
                            .then(res => {
                                if (res.insertedId) {
                                    console.log("user profile info updated", result);
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User Profile Updated",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    reset();
                                    navigate("/");
                                }
                            })
                    })
            })
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Bistro Boss - Sign Up</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left basis-1/2">
                    <img src={LoginImg} alt="" />
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl basis-1/2
                ">
                    <h2 className="text-2xl font-medium text-center mt-8">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label" htmlFor="name">
                                <span className="label-text">Name</span>
                            </label>
                            <input defaultValue="Mr John" {...register("name", { required: true })} type="text" placeholder="name" name="name" className="input input-bordered" required />
                            {errors.name && <span className="text-red-600
                            ">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="photo">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input defaultValue="url" {...register("photo", { required: true })} type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                            {errors.photo && <span className="text-red-600
                            ">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="email">
                                <span className="label-text">Email</span>
                            </label>
                            <input defaultValue="example@email.com" {...register("email", { required: true })} type="email" placeholder="email" name="email" className="input input-bordered" required />
                            {errors.email && <span className="text-red-600
                            ">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label" htmlFor="password">
                                <span className="label-text">Password</span>
                            </label>
                            <input defaultValue="example123" {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} type="password" placeholder="password" name="password" className="input input-bordered" required />
                            {errors.password?.type === "minLength" && <span className="text-red-600
                            ">Min 6 digit required</span>}
                            {errors.password?.type === "maxLength" && <span className="text-red-600
                            ">Max 20 digit required</span>}
                            {errors.password?.type === "pattern" && <span className="text-red-600
                            ">Your password is weak</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p><small>Already have an account ? <Link to="/login" className="text-blue-400">Login</Link></small></p>
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn btn-primary" />
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;