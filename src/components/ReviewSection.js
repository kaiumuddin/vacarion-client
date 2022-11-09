import React from 'react';
import AddReviewCard from "./AddReviewCard";
import ReviewSectionCard from "./ReviewSectionCard";

const ReviewSection = () => {
    return (
        <div className="my-10">
            <h2 className="text-center text-5xl mb-10">Latest Reviews</h2>
            <div className="grid grid-cols-3 gap-36">
                <AddReviewCard></AddReviewCard>
                <ReviewSectionCard></ReviewSectionCard>
                <ReviewSectionCard></ReviewSectionCard>
                <ReviewSectionCard></ReviewSectionCard>
            </div>
        </div >
    );
};

export default ReviewSection;;;;;