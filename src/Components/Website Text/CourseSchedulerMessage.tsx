import React, { useState } from "react";
import "../css/CenterElement.css";
import { Toast } from "react-bootstrap";

export function CourseSchedulerMessage(): JSX.Element {
    const [showMessage, setShowMessage] = useState(true);
    const hideMessage = () => setShowMessage(false);

    return (
        <div className="CenterText">
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
