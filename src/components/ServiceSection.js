import React from 'react';
import {PhotoProvider, PhotoView} from 'react-photo-view';
import {Link} from "react-router-dom";

const ServiceSection = () => {

    const imgUrl = "https://mdbootstrap.com/img/new/standard/nature/182.jpg";

    return (
        <PhotoProvider>
            <div className="rounded-lg shadow-lg bg-white w-full">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <PhotoView src={imgUrl}>
                        <img className="rounded-t-lg w-full" src={imgUrl} alt="" />
                    </PhotoView>
                </a>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Name</h5>
                    <p className="text-gray-700 text-base mb-4">
                        Price
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, voluptate placeat enim doloremque culpa iure pariatur. Minima quam architecto harum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur autem iusto temporibus. Corrupti, atque dolor necessitatibus vitae sapiente quia? Eveniet temporibus velit quia quidem porro corrupti odit dignissimos, maxime voluptatem modi, voluptatum natus aperiam consectetur numquam reiciendis ipsum vero perspiciatis? Recusandae optio obcaecati atque dolor provident mollitia aut adipisci earum.
                    </p>
                </div>
            </div>
        </PhotoProvider>
    );
};

export default ServiceSection;