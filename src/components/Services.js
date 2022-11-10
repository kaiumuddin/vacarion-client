import React, {useEffect, useState} from 'react';
import useTitle from "../hooks/useTitle";
import LoadingSpinner from "./LoadingSpinner";
import ServiceCard from "./ServiceCard";

const Services = () => {

    useTitle('Services');

    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = `https://vacarion-server.vercel.app/services`;

        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(fromDb => {
                setServices(fromDb);
            });
    }, []);

    if (services.length === 0)
        return (
            <LoadingSpinner></LoadingSpinner>
        );


    return (

        <div>
            <h3 className="text-5xl text-center my-10 font-bold">All Services</h3>
            <div className=" my-10 grid grid-cols-1 md:grid-cols-3 justify-items-center place-content-center place-items-center  gap-4">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        SingleService={service}
                    ></ServiceCard>)
                }

            </div>
        </div>
    );
};

export default Services;