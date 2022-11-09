import React from 'react';
import {FcEditImage, FcEmptyTrash} from "react-icons/fc";


const MyReviewsRow = () => {
    return (
        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Service Name
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Review
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex gap-5">
                <button><FcEditImage></FcEditImage></button>
                <button><FcEmptyTrash></FcEmptyTrash></button>
            </td>
        </tr>
    );
};

export default MyReviewsRow;