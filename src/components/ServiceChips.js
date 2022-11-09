import React from 'react';

const ServiceChips = () => {
    return (
        <div className="my-5 w-full flex justify-center">
            <span
                class="mx-4 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                <img class="rounded-full w-14 h-14 max-w-none" alt="A"
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" />
                <span class="flex items-center px-3 py-2">
                    John Doe
                </span>
            </span>
            <span
                class="mx-4 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                <img class="rounded-full w-14 h-14 max-w-none" alt="A"
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" />
                <span class="flex items-center px-3 py-2">
                    John Doe
                </span>
            </span>
            <span
                class="mx-4 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center cursor-pointer active:bg-gray-300 transition duration-300 ease w-max">
                <img class="rounded-full w-14 h-14 max-w-none" alt="A"
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" />
                <span class="flex items-center px-3 py-2">
                    John Doe
                </span>
            </span>
        </div>
    );
};

export default ServiceChips;