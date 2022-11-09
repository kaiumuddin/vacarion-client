import React from 'react';

const ServiceChips = () => {
    return (
        <div className="my-5 w-full flex justify-center">
            <span
                className="mx-4 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                <img className="rounded-full w-14 h-14 max-w-none" alt="A"
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" />
                <span className="flex items-center px-3 py-2">
                    John Doe
                </span>
            </span>
            <span
                className="mx-4 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                <img className="rounded-full w-14 h-14 max-w-none" alt="A"
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" />
                <span className="flex items-center px-3 py-2">
                    John Doe
                </span>
            </span>
            <span
                className="mx-4 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                <img className="rounded-full w-14 h-14 max-w-none" alt="A"
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" />
                <span className="flex items-center px-3 py-2">
                    John Doe
                </span>
            </span>
            <span
                className="mx-4 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                <img className="rounded-full w-14 h-14 max-w-none" alt="A"
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" />
                <span className="flex items-center px-3 py-2">
                    See All
                </span>
            </span>
        </div>
    );
};

export default ServiceChips;