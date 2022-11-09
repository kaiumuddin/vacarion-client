import React from 'react';

const AddService = () => {
    return (
        <div className="w-full my-10 container mx-auto flex justify-center items-center">
            <div class="block p-6 rounded-lg shadow-lg bg-white w-full">
                <form>
                    <div class="form-group mb-6">
                        <label for="name" class="form-label inline-block mb-2 text-gray-700">Service Name</label>
                        <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                            aria-describedby="" placeholder="Enter Service Name" />
                    </div>
                    <div class="form-group mb-6">
                        <label for="exampleInputPassword1" class="form-label inline-block mb-2 text-gray-700">Password</label>
                        <input type="password" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
                            placeholder="Password" />
                    </div>

                    <button type="submit" class=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;