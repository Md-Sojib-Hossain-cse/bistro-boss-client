import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCards from "../../../hooks/useCards";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
    const [error, setError] = useState("");
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [cart, refetch] = useCards();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post("/create-payment-intent", { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log("payment error : ", error);
            setError(error.message);
        }
        else {
            console.log("payment method : ", paymentMethod);
            setError("");
        }


        //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || "anonymous",
                        name: user?.displayName || "anonymous",
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        else {
            console.log("payment intent", paymentIntent)
            if (paymentIntent.status === "succeeded") {
                console.log("transaction id", paymentIntent.id)
                setTransactionId(paymentIntent.id);

                //now save the payment in the database
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),  //UTC date convert , use Moment.js to convert
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: "pending"
                }

                const res = await axiosSecure.post("/payments", payment)
                console.log("payment saved", res);
                refetch();

                if (res?.data?.paymentResult.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for taka poysha",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/dashboard/paymentHistory")
                }
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            ></CardElement>
            <button type="submit" disabled={!stripe || !clientSecret} className="btn btn-primary btn-sm">
                Pay
            </button>
            <p className="text-sm text-red-600">{error}</p>
            <p className="text-sm text-green-600">Your Transaction Id : {transactionId}</p>
        </form>
    );
};

export default CheckOutForm;