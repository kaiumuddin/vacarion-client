import React from 'react';
import MyReviewsRow from "./MyReviewsRow";

const MyReviews = () => {
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
                                    <MyReviewsRow></MyReviewsRow>
                                    <MyReviewsRow></MyReviewsRow>
                                    <MyReviewsRow></MyReviewsRow>
                                    <MyReviewsRow></MyReviewsRow>

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