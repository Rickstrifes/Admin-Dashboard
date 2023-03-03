import React from 'react'
import Navigation from '../Components/Nav/Navigation';
import Sidebar from '../Components/Sibar/Sidebar';



const RenderLayout = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
            <Sidebar />
        </>
    )   
}

export default RenderLayout