import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/UserContext";
import MyReviewsRow from "./MyReviewsRow";

const MyReviews = () => {

    const {user} = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/reviewbyemail/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(fromDb => {
                console.log(fromDb);
                setMyReviews(fromDb);
            });


    }, [user.email]);


    const handleDelete = (id) => {
        const procced = window.confirm('Are you sure, you want to cancel this order');
        if (procced) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = myReviews.filter(odr => odr._id !== id);
                        setMyReviews(remaining);
                    }
                });

        }
    };

    return (
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
    );
};

export default MyReviews;