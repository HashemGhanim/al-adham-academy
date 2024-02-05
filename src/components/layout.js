import React, {useContext} from 'react';
import MainNavbar from "./common_components/navbar/mainNavbar";
import UserNavbarAuthenticated from "./common_components/user_navbar_authenticated/userNavbarAuthenticated";
import InputRate from "./common_components/inputRateForStudent/inputRate";
import {Outlet} from "react-router-dom";
import Footer from "./common_components/footer/footer";

function Layout({children}) {
    return (
        <>
            <MainNavbar/>
            <UserNavbarAuthenticated/>
            <InputRate/>
            {children}
            <Footer/>
        </>
    );
}

export default Layout;