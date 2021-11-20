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
