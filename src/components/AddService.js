import React from 'react';

const AddService = () => {

    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;

        const service = form.service.value;
        const description = form.description.value;
        const price = form.price.value;
        const img = form.img.value;


        const newService = {
            service,
            description,
            price,
            img,
        };

        console.log(newService);

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(fromDb => {
                console.log('from server : ', fromDb);
                if (fromDb.acknowledged) {
                    alert('Order Placed successfuly');
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="w-full my-10 container mx-auto flex justify-center items-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white w-full">
                <form onSubmit={handleAddService}>
                    <div className="form-group mb-6">
                        <label htmlFor="name" className="form-label inline-block mb-2 text-gray-700">Service Name</label>
                        <input type="text" name="service" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                            aria-describedby="" placeholder="Enter Service Name" required />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="name" className="form-label inline-block mb-2 text-gray-700">Description</label>
                        <input type="text" name="description" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                            aria-describedby="" placeholder="Enter Description" required />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="name" className="form-label inline-block mb-2 text-gray-700">Price</label>
                        <input type="text" name="price" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                            aria-describedby="" placeholder="Enter Price" required />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="name" className="form-label inline-block mb-2 text-gray-700">Image Url</label>
                        <input type="text" name="img" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                            aria-describedby="" placeholder="Enter image url" required />
                    </div>

                    <button type="submit" className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;