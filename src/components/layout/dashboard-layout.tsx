import React from 'react';
import Header from "./header/header"
import LeftNav from "./nav/leftNav"
import ShowNotify from './showNotify';


const DashboardLayout = ({ children }: any) => {
    return (
        <>
            <Header />
            <LeftNav />
            <ShowNotify/>
            {children}
            
        </>
    );
};

export default DashboardLayout;