import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServiceChips = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = `https://vacarion-server.vercel.app/services3`;

        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(fromDb => {
                setServices(fromDb);
            });
    }, []);


    return (
        <div className="container mx-auto grid grid-cols-1">
            <div className="my-10 grid grid-cols-1 md:grid-cols-3 justify-items-center place-content-center place-items-center  gap-4">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        SingleService={service}
                    ></ServiceCard>)
                }
            </div>
            <Link to='/services' className=" w-full text-center text-2xl px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">See All</Link>

        </div>
    );
};

export default ServiceChips;