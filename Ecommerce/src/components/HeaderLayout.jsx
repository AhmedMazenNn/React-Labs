import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";

const HeaderLayout = () => {
    return (
        <>
            <Header />
            <div className="container my-5">
                <Outlet />
            </div>
        </>
    );
};

export default HeaderLayout;
