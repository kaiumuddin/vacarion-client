import React from 'react';
import {useLoaderData} from "react-router-dom";
import {toast} from "react-toastify";

const MyReviewsEdit = () => {
    const data = useLoaderData();
    const {_id, reviewText} = data;


    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const text = form.text.value;


        fetch(`https://vacarion-server.vercel.app/review/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({text: text})
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Updated Successfully');
                }
            });


    };

    return (
        <div className="container mx-auto my-10">
            <form onSubmit={handleUpdate}>
                <label>Edit Review</label>
                <input type="text" />
                <div className="mb-6">
                    <textarea
                        type="text"
                        name="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        defaultValue={reviewText}
                    />
                </div>
                <div className="text-center lg:text-left">
                    <button
                        type="submit"
                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MyReviewsEdit;