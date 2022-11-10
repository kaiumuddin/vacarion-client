import React, {useEffect, useState} from 'react';
import {useLoaderData} from "react-router-dom";
import ReviewSection from "./ReviewSection";
import ServiceSection from "./ServiceSection";

const ServiceDetails = () => {

    const serviceDetails = useLoaderData();
    const {_id} = serviceDetails;

    console.log(serviceDetails);

    return (
        <div className="container mx-auto">
            <ServiceSection serviceDetails={serviceDetails}></ServiceSection>
            <ReviewSection serviceDetails={serviceDetails}></ReviewSection>
        </div>
    );
};

export default ServiceDetails;