import React from 'react';
import MainNavbar from "./common_components/navbar/mainNavbar";
import {Outlet} from "react-router-dom";
import Footer from "./common_components/footer/footer";

function RootLayout(props) {
    return (
        <>
            <MainNavbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default RootLayout;