// src/context/AppContext.jsx
import React, { createContext, useContext } from 'react';

const AppContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const bannerHeight = "80px";
    const themeColor = "#8e44ad";
    const fontColor = "white";

    return (
        <AppContext.Provider value={{
            bannerHeight,
            themeColor,
            fontColor,
        }}>
            {children}
        </AppContext.Provider>
    );
};
