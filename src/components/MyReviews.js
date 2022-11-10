import React, {useContext, useEffect, useState} from 'react';
import {toast} from "react-toastify";
import {AuthContext} from "../context/UserContext";
import useTitle from "../hooks/useTitle";
import MyReviewsRow from "./MyReviewsRow";

const MyReviews = () => {

    useTitle('My Reviews');

    const {user} = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    console.log(user.email);

    useEffect(() => {
        // const url = `http://localhost:5000/reviewbyemail/${user.email}`;
        const url = `https://vacarion-server.vercel.app/reviewbyemail/${user.email}`;
        // const url = `https://vacarion-server.vercel.app/reviewbyemail?email=${user.email}`;
        // {
        //     // headers: {
        //     //     authorization: `Bearer ${localStorage.getItem('vacarion-token')}`
        //     // }
        // }
        fetch(url)
            .then(res => res.json())
            .then(fromDb => {
                setMyReviews(fromDb);
            });


    }, [user.email]);


    const handleDelete = (id) => {
        const procced = window.confirm('Are you sure, you want to cancel this order');
        if (procced) {
            fetch(`https://vacarion-server.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Deleted Successfully');
                        const remaining = myReviews.filter(odr => odr._id !== id);
                        setMyReviews(remaining);
                    }
                });

        }
    };

    if (myReviews.length === 0) {
        return (
            <div className="h-screen flex justify-center items-center ">
                <div className="text-5xl">No reviews were added</div>
            </div>
        );
    }

    return (

        <div className="h-screen">
            <div className="text-center text-3xl my-10">My Reviews</div>
            <div className="container mx-auto">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                #
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Service Name
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Review
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Edit/Delete
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            myReviews.map(((mySingleReview, idx) => <MyReviewsRow
                                                key={mySingleReview._id}
                                                mySingleReview={mySingleReview}
                                                idx={idx}
                                                handleDelete={handleDelete}
                                            ></MyReviewsRow>))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyReviews;