import React from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function GetStartedModal({  showGetStartedModal, setShowGetStartedModal }: 
    { showGetStartedModal: boolean, setShowGetStartedModal: (b: boolean) => void }): JSX.Element {
    const hideGetStarted = () => setShowGetStartedModal(false);
    const handleShow = () => setShowGetStartedModal(true);

    return (
        <div>
            <Button aria-label="Getting Started" variant="warning" className="m-3" onClick={handleShow}>Getting Started</Button>

            <Modal show={ showGetStartedModal } onHide={ hideGetStarted }>
                <Modal.Header closeButton>
                    <Modal.Title>Getting Started</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    The semester table below, and all semesters currently in the drop-down menu, are structured after 
                    the <a href="https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf">
                    Default Computer Science B.S plan</a> as designated by the UD College of Engineering.
                        
                    The blue <b>Semesters</b> drop-down menu below will display all the semesters currently added 
                    to your plan, and you can select any of them to view the courses currently in that semester.
                    You can click the <b>-</b> button to the left to remove a semester, and the <b>+</b> button on 
                    the right to add a semester to your plan. 

                    Though the semesters — and the courses in them — are currently set to the default plan for a 
                    Computer Science B.S student, they can easily be manipulated to fit anyone’s academic needs.
                    
                </Modal.Body>
            </Modal>
        </div>
    );
}