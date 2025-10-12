import React from "react";
import "./HeaderWindowContainer.css"

const HeaderWindowContainer = ({ children, className}) => {
    return (
        <div className={`page-window-root-container ${className}`}>
            {children}
        </div>
    );
};

export default HeaderWindowContainer;