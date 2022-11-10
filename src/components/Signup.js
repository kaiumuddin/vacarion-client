import React, {useContext} from 'react';
import {FcGoogle} from "react-icons/fc";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {AuthContext} from "../context/UserContext";
import useTitle from "../hooks/useTitle";
import LoadingSpinner from "./LoadingSpinner";
const Signup = () => {

    const {createUser, updateUserProfile, signInWithGoogle, loading} = useContext(AuthContext);
    const navigate = useNavigate();

    useTitle('Signup');

    // Handle submit
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;


        createUser(email, password)
            .then(result => {
                handlUpdateUserProfile(username, photoURL);
                toast.success('New account created');
                form.reset();
                navigate('/');

            })
            .catch((error) => {
                toast.error(error.message);
            });

    };


    // Update profile
    const handlUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };
        updateUserProfile(profile)
            .then((result) => {
                toast.success('Profile updated');
                navigate('/');
            })
            .catch((error) => console.error(error));
    };

    // Google Sign In 
    const handleSigninWithGoogle = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Google Login Success!');
                navigate('/');
            })
            .catch(error => toast.error(error.message));
    };


    if (loading) {
        return (
            <LoadingSpinner></LoadingSpinner>
        );
    }

    return (
        <section className="w-full">
            <div className="px-6 h-full text-gray-800">
                <div
                    className="container mx-auto flex flex-col shadow-lg my-10 p-10 rounded-lg xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img
                            alt=""
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-row items-center justify-center">
                                <p className="text-lg mb-0 mr-4">Sign up with</p>
                                <button onClick={handleSigninWithGoogle}>
                                    <FcGoogle></FcGoogle>
                                </button>
                            </div>

                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">Or</p>
                            </div>

                            <div className="mb-6">
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address"
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="text"
                                    name="photoURL"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Photo Url"
                                />
                            </div>

                            <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Signup
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Already have an account?
                                    <Link
                                        to="/signin"
                                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                    > Sign in</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;