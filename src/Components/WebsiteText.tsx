import React, { useState } from "react";
import "../css/Team.css";
import { Alert, Toast, Nav, Navbar, Image } from "react-bootstrap";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { CourseScheduler } from "./CourseScheduler";
import Team3Logo from "../Images/Team3_Logo.svg";
import AJ_pic  from "../Images/Team/abeljuarez.png";
import AD_pic  from "../Images/Team/ahilyndipre.png";
import RR_pic  from "../Images/Team/renross.png";

export function Header(): JSX.Element {
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
            <Navbar.Brand>{"UD CIS Semester Planner"}</Navbar.Brand>
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

export function WelcomeMessage(): JSX.Element {
    return (
        <div><div>
            <h1 className="m-5" style={{ display: "flex", justifyContent: "center" }}>Welcome to Team 3&#39;s UD CIS Scheduler!</h1>

            <p style={{ display: "flex", justifyContent: "center" }}>
                Our goal is to help CISC students plan out their semesters
                by providing templates of potential Fall/Spring semesters,
                and even Winter and Summer!</p>

            <p style={{ display: "flex", justifyContent: "center" }}>
                This website will serve as a way for students to keep track of the
                classes they have taken and which ones they need to take next.</p>

            <p style={{ display: "flex", justifyContent: "center" }}>
                Students will get the option to remove a semester
                if they are not pleased with their schedule</p>

            <p style={{ display: "flex", justifyContent: "center" }}>
                Students will be able to edit in classes in case
                our default schedules dont match theirs</p>

            <p style={{ display: "flex", justifyContent: "center" }}>
                Recommended 4 Year Path To Graduate on Time:
                <a href="https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf"
                >Suggested Plan</a></p>
        </div></div>
    );
}

export function CourseSchedulerMessage(): JSX.Element {
    const [showMessage, setShowMessage] = useState(true);
    const hideMessage = () => setShowMessage(false);

    return (
        <div style={{display: "flex", justifyContent:"center"}}>
            <Toast show={ showMessage } onClose={ hideMessage }>
                <Toast.Header>
                    <strong className="me-auto">Getting Started</strong>
                </Toast.Header>
                <Toast.Body><p> 
                    The semester table below, and all semesters currently in the drop-down menu, are structured after 
                    the <a href="https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf">
                    default Computer Science B.S plan</a> as designated by the UD College of Engineering.
                        
                    The blue <b>Semesters</b> drop-down menu below will display all the semesters currently added 
                    to your plan, and you can select any of them to view the courses currently in that semester.
                    
                    Though the semesters — and the courses in them — are currently set to the default plan for a 
                    Computer Science B.S student, they can easily be manipulated to fit anyone’s academic needs.

                    For more information about how to use the scheduler, click on the help buttons below!
                </p></Toast.Body>
            </Toast></div>
    );

}

export function Footer(): JSX.Element {
    return <div>
        <Alert variant="light" style={{position: "fixed", bottom: "0", left: "0", right: "0"}}><hr/>
            <h5 style={{display: "flex", justifyContent:"center"}}>Meet The Team!</h5><hr/>
            <div style={{display: "flex", justifyContent:"center"}}>
                <div 
                    className="Team" 
                    onClick={() => window.open("https://github.com/ahilynd", "_blank")}>
                    <Image
                        alt="Ahilyn Dipre GitHub Profile Picture"
                        src={ AD_pic }
                        width="30"
                        height="30"
                        className="mx-3"
                        roundedCircle
                    ></Image>
                    Ahilyn Dipre</div>
                <div 
                    className="Team" 
                    onClick={()=> window.open("https://github.com/TheMexicanChico", "_blank")}>
                    <Image
                        alt="Abel Juarez GitHub Profile Picture"
                        src={ AJ_pic }
                        width="30"
                        height="30"
                        className="mx-3"
                        roundedCircle
                    ></Image>
                    Abel Juarez</div>
                <div 
                    className="Team" 
                    onClick={()=> window.open("https://github.com/renross", "_blank")}>
                    <Image
                        alt="Ren Ross GitHub Profile Picture"
                        src={ RR_pic }
                        width="30"
                        height="30"
                        className="mx-3"
                        roundedCircle
                    ></Image>
                    Ren Ross</div>
            </div>
        </Alert>
    </div>;
}
