import React from 'react';
import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center place-content-center place-items-center  gap-4">
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
        </div>
    );
};

export default Services;