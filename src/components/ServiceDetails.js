import React from 'react';
import ReviewSection from "./ReviewSection";
import ServiceSection from "./ServiceSection";

const ServiceDetails = () => {
    return (
        <div className="container mx-auto">
            <ServiceSection></ServiceSection>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default ServiceDetails;