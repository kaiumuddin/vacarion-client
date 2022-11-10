import React, {useEffect, useState} from 'react';
import AddReviewCard from "./AddReviewCard";
import ReviewSectionCard from "./ReviewSectionCard";

const ReviewSection = ({_id}) => {

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        const url = `http://localhost:5000/review/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(fromDb => {
                setReviews(fromDb);
            });
    }, [_id]);

    return (
        <div className="my-10">
            <h2 className="text-center text-5xl mb-10">Latest Reviews</h2>
            <div className="grid grid-cols-3 gap-36">
                <AddReviewCard _id={_id}></AddReviewCard>

                {
                    reviews.map((singleReview) => <ReviewSectionCard
                        key={singleReview._id}
                        singleReview={singleReview}
                    ></ReviewSectionCard>)
                }


            </div>
        </div >
    );
};

export default ReviewSection;;;;;