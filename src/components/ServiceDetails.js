import React, {useEffect, useState} from 'react';
import {useLoaderData} from "react-router-dom";
import ReviewSection from "./ReviewSection";
import ServiceSection from "./ServiceSection";

const ServiceDetails = () => {

    const serviceDetails = useLoaderData();
    const {_id} = serviceDetails;

    console.log(_id);

    return (
        <div className="container mx-auto">
            <ServiceSection serviceDetails={serviceDetails}></ServiceSection>
            <ReviewSection _id={_id}></ReviewSection>
        </div>
    );
};

export default ServiceDetails;