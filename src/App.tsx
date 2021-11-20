import "./css/App.css";
import "./css/Tabs.css";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { WelcomeMessage } from "./Components/WebsiteText";
import { CourseScheduler } from "./Components/CourseScheduler";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Team3Logo from "./Images/t3_logo.svg";


function App(): JSX.Element { // jsx.element = very important return type, function has to return jsx.element
    //  NavBar Source: https://www.nicesnippets.com/blog/react-bootstrap-navbar-example

    return <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand><img
                alt="Team 3 Logo"
                src={ Team3Logo }
                width="100"
                height="100"
                className="d-inline-block align-top"
            ></img></Navbar.Brand>
            <Navbar.Brand>{ "UD CIS Semester Planner" }</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/ud-cis-scheduler-team-3/#/">Welcome</Nav.Link>
                <Nav.Link href="/ud-cis-scheduler-team-3/#/course-scheduler">Course Scheduler</Nav.Link>
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

export default App;
