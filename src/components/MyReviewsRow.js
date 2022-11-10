import React from 'react';
import {FcEditImage, FcEmptyTrash} from "react-icons/fc";
import {Link} from "react-router-dom";


const MyReviewsRow = ({idx, mySingleReview, handleDelete}) => {

    const {_id, serviceId, serviceName, reviewText, reviewerName, revieweremail, reviewerImg} = mySingleReview;

    console.log(_id);

    return (
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{idx + 1}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {
                    serviceName || serviceId
                }
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {reviewText}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex gap-5">
                <Link to={`/reviewedit/${_id}`}><FcEditImage></FcEditImage></Link>
                <button onClick={() => handleDelete(_id)}><FcEmptyTrash></FcEmptyTrash></button>
            </td>
        </tr>
    );
};

export default MyReviewsRow;