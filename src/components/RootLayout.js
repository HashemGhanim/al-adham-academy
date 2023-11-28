import React from 'react';
import {Outlet} from "react-router-dom";
import MainNavbar from "./common_components/navbar/mainNavbar";
import Footer from "./common_components/footer/footer";
import UserNavbarAuthenticated from "./common_components/user_navbar_authenticated/userNavbarAuthenticated";

function RootLayout(props) {
    return (
        <>
            <MainNavbar/>
            <UserNavbarAuthenticated/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default RootLayout;