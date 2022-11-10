import React from 'react';

const AddReviewCard = () => {

    const handleAddReview = () => {

    };

    return (
        <form onSubmit={handleAddReview} className="mb-12 md:mb-0 max-w-md shadow-lg p-5 flex flex-col justify-between ">
            <h3 className="text-center text-2xl mb-3">Add your review</h3>
            <textarea
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your message"
            ></textarea>
            <button type="submit" class="justify-self-end mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Post</button>
        </form>
    );
};

export default AddReviewCard;