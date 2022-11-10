import React from 'react';

const Gallery = () => {
    return (
        <div className="container mx-auto ">
            <h3 className="text-5xl font-bold text-center my-10">Gallery</h3>
            <div className="grid grid-cols-3 gap-5">

                <div className="mb-12 lg:mb-0">
                    <img
                        src="https://images.unsplash.com/photo-1605972643561-8bac9eec3ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                        className="w-full object-cover aspect-square rounded-lg shadow-lg"
                        alt=""
                    />
                </div>
                <div className="mb-12 lg:mb-0">
                    <img
                        src="https://images.unsplash.com/photo-1585123388867-3bfe6dd4bdbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1101&q=80"
                        className="w-full object-cover aspect-square rounded-lg shadow-lg"
                        alt=""
                    />
                </div>
                <div className="mb-12 lg:mb-0">
                    <img
                        src="https://images.unsplash.com/photo-1604993497451-eed6eb271a9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                        className="w-full object-cover aspect-square rounded-lg shadow-lg"
                        alt=""
                    />
                </div>
                <div className="mb-12 lg:mb-0">
                    <img
                        src="https://images.unsplash.com/photo-1580053343342-c4ab3a791a7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        className="w-full object-cover aspect-square rounded-lg shadow-lg"
                        alt=""
                    />
                </div>
                <div className="mb-12 lg:mb-0">
                    <img
                        src="https://images.unsplash.com/photo-1624395149011-470cf6f6ec02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80"
                        className="w-full object-cover aspect-square rounded-lg shadow-lg"
                        alt=""
                    />
                </div>
                <div className="mb-12 lg:mb-0">
                    <img
                        src="https://images.unsplash.com/photo-1564034503-e7c9edcb420c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                        className="w-full object-cover aspect-square rounded-lg shadow-lg"
                        alt=""
                    />
                </div>

            </div>
        </div>
    );
};

export default Gallery;