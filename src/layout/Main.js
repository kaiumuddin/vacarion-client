import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceChips from "../components/ServiceChips";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;