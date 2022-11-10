import React from 'react';
import useTitle from "../hooks/useTitle";
import Banner from "./Banner";
import ServiceChips from "./ServiceChips";

const Home = () => {

    useTitle('Home');

    return (
        <div>
            <ServiceChips></ServiceChips>
            <Banner></Banner>
        </div>
    );
};

export default Home;