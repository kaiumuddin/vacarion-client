import React, {useEffect, useState} from 'react';
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/services`;

        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(fromDb => {
                // console.log(fromDb);
                setServices(fromDb);
            });
    }, []);


    return (
        <div className="my-10 grid grid-cols-1 md:grid-cols-3 justify-items-center place-content-center place-items-center  gap-4">
            {
                services.map(service => <ServiceCard
                    key={service._id}
                    SingleService={service}
                ></ServiceCard>)
            }

        </div>
    );
};

export default Services;