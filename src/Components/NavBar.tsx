import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { CourseScheduler } from "./CourseScheduler";
import Team3Logo from "../Images/Team3_Logo.svg";
import { WelcomeMessage } from "./Website Text/WelcomeMessage";

export function NavBar(): JSX.Element {
    //  NavBar Reference: https://www.nicesnippets.com/blog/react-bootstrap-navbar-example
    return <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand><img
                alt="Team 3 Logo"
                src={ Team3Logo }
                width="100"
                height="100"
                className="d-inline-block align-top"/></Navbar.Brand>
            <Navbar.Brand>{"UD CIS Semester Planner"}</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link aria-label="Welcome Tab" href="/ud-cis-scheduler-team-3/#/">Welcome</Nav.Link>
                <Nav.Link aria-label="Course Tab" href="/ud-cis-scheduler-team-3/#/course-scheduler">Course Scheduler</Nav.Link>
            </Nav>
        </Navbar>
        <Router basename="/ud-cis-scheduler-team-3">
            <Switch>
                <Route exact path="/course-scheduler"><CourseScheduler></CourseScheduler></Route>
                <Route exact path=""><WelcomeMessage></WelcomeMessage></Route>
            </Switch>
        </Router>
    </div>;
}