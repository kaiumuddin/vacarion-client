import React, {useEffect, useState} from 'react';
import {useLoaderData} from "react-router-dom";
import ReviewSection from "./ReviewSection";
import ServiceSection from "./ServiceSection";

const ServiceDetails = () => {

    // const [details, setDetails] = useState();

    const serviceDetails = useLoaderData();

    console.log(serviceDetails);

    return (
        <div className="container mx-auto">
            <ServiceSection serviceDetails={serviceDetails}></ServiceSection>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default ServiceDetails;