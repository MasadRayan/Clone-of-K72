import React, { createContext, useState } from 'react';

export const NavBarContext = createContext()

const NavContext = ({children}) => {

    const [navOpen, setNavOpen] = useState(false)

    return (
        <NavBarContext.Provider value={[navOpen, setNavOpen]}>
            {children}
        </NavBarContext.Provider>
    );
};

export default NavContext;