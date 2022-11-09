import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import ServiceChips from "../components/ServiceChips";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ServiceChips></ServiceChips>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;