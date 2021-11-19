import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import "../css/Tabs.css";

export function WelcomeMessage(): JSX.Element {
    return (
        <div>
            <h1 className="me-auto" style={{display: "flex", justifyContent:"center"}}>Welcome to Team 3&#39;s UD CIS Scheduler!</h1>
            
            <p style={{display: "flex", justifyContent:"center"}}>
                Our goal is to help CISC students plan out their semesters 
                by providing templates of potential Fall/Spring semesters, 
                and even Winter and Summer!</p>

            <p style={{display: "flex", justifyContent:"center"}}>
                This website will serve as a way for students to keep track of the 
                classes they have taken and which ones they need to take next.</p>

            <p style={{display: "flex", justifyContent:"center"}}>
                Students will get the option to remove a semester 
                if they are not pleased with their schedule</p>

            <p style={{display: "flex", justifyContent:"center"}}>
                Students will be able to edit in classes in case 
                our default schedules dont match theirs</p>

            <p style={{display: "flex", justifyContent:"center"}}>
                Recommended 4 Year Path To Graduate on Time: 
                <a href="https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf"
                >Suggested Plan</a></p>

            <h2 style={{display: "flex", justifyContent:"center"}}>Created by: Ren Ross, Abel Juarez and Ahilyn Dipre</h2>
        </div>
    );
}

export function CourseSchedulerMessage(): JSX.Element {
    const [showMessage, setShowMessage] = useState(true);
    const hideMessage = () => setShowMessage(false);

    return (
        <div style={{display: "flex", justifyContent:"center"}}>
            <Toast show={ showMessage } onClose={ hideMessage }>
                <Toast.Header>
                    <strong className="me-auto">Instructions</strong>
                </Toast.Header>
                <Toast.Body>
                    <p>The table below is a structured set of data made up of courses that
                    most Computer Science B.S. majors have to take. This table allows
                    you to quickly and easily look through all the semesters (Freshman
                    to Senior). These semesters default to courses that are recommended
                    by the <a href="https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf">4 Year Path </a>
                    to graduate on time (by the University of Delaware). However, the
                    tables can be manipulated in a way that can fit anyone’s academic needs.</p>
                </Toast.Body>
            </Toast></div>
    );

}
