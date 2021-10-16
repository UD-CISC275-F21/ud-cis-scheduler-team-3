import React from "react";
import {Nav, NavMenu, NavLink} from "./NavbarElements";
//import {FaBars} from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/home/">
                    <h1>Home</h1>
                    
                </NavLink>
                <NavMenu>
                    <NavLink to="/TestingDummy/">
                    TestingDummy
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;