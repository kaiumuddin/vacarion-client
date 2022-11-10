import React from 'react';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import {Link} from "react-router-dom";

const ServiceSection = ({serviceDetails}) => {
    const {_id, service, price, description, img} = serviceDetails;

    return (
        <PhotoProvider>
            <div className="my-10 rounded-lg shadow-lg bg-white w-full">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <PhotoView src={img}>
                        <img className="rounded-t-lg w-full" src={img} alt="" />
                    </PhotoView>
                </a>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{service}</h5>
                    <p className="text-gray-700 text-base mb-4">
                        Price: ${price}
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                        {description}
                    </p>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default ServiceSection;