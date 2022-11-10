import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {AuthContext} from "../context/UserContext";

const Navbar = () => {

    const {user, logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(toast.warning('User logged out!'))
            .catch(error => console.log(error));
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
                <div className="container mx-auto px-6 w-full flex flex-wrap items-center justify-between">
                    <div className="flex items-center">
                        <Link to='/' className="navbar-brand text-blue-600 font-bold">
                            Vacanary
                        </Link>
                    </div>
                    <div className="ml-auto" id="navbarSupportedContentY">
                        <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                            {
                                <li className="nav-item">
                                    <Link to='/services' className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Services</Link>
                                </li>
                            }
                            {
                                user && (
                                    <>
                                        <li className="nav-item">
                                            <Link to='/myreviews' className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">My Reviews</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to='/addservice' className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Add Service</Link>
                                        </li>
                                        <li className="nav-item">
                                            {user.username}
                                        </li>
                                        <li className="nav-item">
                                            {user.email}
                                        </li>
                                        <li className="nav-item mb-2 lg:mb-0">
                                            <button onClick={handleLogout} type="button" className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign out</button>
                                        </li>
                                    </>
                                )
                            }
                            {
                                !user && (
                                    <>
                                        <li className="nav-item mb-2 lg:mb-0">
                                            <Link to='/signin' className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign in</Link>
                                        </li>
                                    </>
                                )
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;