import React from "react";
import {Nav, Bars, NavMenu, NavLink} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/home/">
                    <h1>Home</h1>
                    <Bars/>
                </NavLink>
                <NavMenu>
                    <NavLink to="/TestingDummy/" activestyle>
                    TestingDummy
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;