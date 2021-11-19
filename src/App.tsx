import "./css/App.css";
import "./css/Tabs.css";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { WelcomeMessage } from "./Components/WebsiteText";
import { CourseScheduler } from "./Components/CourseScheduler";


function App(): JSX.Element { // jsx.element = very important return type, function has to return jsx.element
    //  NavBar Source: https://www.nicesnippets.com/blog/react-bootstrap-navbar-example

    return <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Team 3 UD CIS Scheduler</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/ud-cis-scheduler-team-3/welcome">Welcome</Nav.Link>
                <Nav.Link href="/ud-cis-scheduler-team-3/course-scheduler">Course Scheduler</Nav.Link>
            </Nav>
        </Navbar>
        <Router>
            <Switch>
                <Route path="/ud-cis-scheduler-team-3/course-scheduler"><CourseScheduler/></Route>
                <Route path="/ud-cis-scheduler-team-3/welcome"><WelcomeMessage></WelcomeMessage></Route>
                <Route path=""><WelcomeMessage></WelcomeMessage></Route>
            </Switch>
        </Router>
    </div>;
}

export default App;
