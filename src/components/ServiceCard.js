import React from 'react';
import {PhotoProvider, PhotoView} from 'react-photo-view';

const ServiceCard = () => {

    const imgUrl = "https://mdbootstrap.com/img/new/standard/nature/182.jpg";

    return (
        <PhotoProvider>
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <PhotoView src={imgUrl}>
                        <img className="rounded-t-lg" src={imgUrl} alt="" />
                    </PhotoView>
                </a>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Name</h5>
                    <p className="text-gray-700 text-base mb-4">
                        Price
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                        Description
                    </p>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View Details</button>
                </div>
            </div>
        </PhotoProvider>


    );
};

export default ServiceCard;