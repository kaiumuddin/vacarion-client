import React from 'react';
import {Link} from "react-router-dom";

const LoginToReviewCard = () => {
    return (
        <div className="mb-12 md:mb-0 max-w-md shadow-lg p-5 flex justify-center items-center gap-5">
            <div className="text-center lg:text-left">
                <Link
                    to="/signin"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                    Signin
                </Link>
            </div>
            <p>to Review</p>
        </div>
    );
};

export default LoginToReviewCard;