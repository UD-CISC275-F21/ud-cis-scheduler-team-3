import "./css/App.css";
import "./css/Tabs.css";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { WelcomeMessage } from "./Components/WebsiteText";
import { CourseScheduler } from "./Components/CourseScheduler";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Team3Logo from "./Images/t3_logo.svg";


function App(): JSX.Element { // jsx.element = very important return type, function has to return jsx.element
    //  NavBar Source: https://www.nicesnippets.com/blog/react-bootstrap-navbar-example

    return <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <img
                    alt="Team 3 Logo"
                    src={ Team3Logo }
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />Team 3 UD CIS Scheduler</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/ud-cis-scheduler-team-3/welcome">Welcome</Nav.Link>
                <Nav.Link href="/ud-cis-scheduler-team-3/course-scheduler">Course Scheduler</Nav.Link>
            </Nav>
        </Navbar>
        <Router>
            <Switch>
                <Route exact path="/ud-cis-scheduler-team-3/course-scheduler" component={ CourseScheduler }/>
                <Route exact path="/ud-cis-scheduler-team-3/welcome" component={ WelcomeMessage }/>
                <Route exact path="" component={ WelcomeMessage }/>
            </Switch>
        </Router>
    </div>;
}

export default App;
