import React from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export function RemoveSemesterModal({  showRemoveSemesterModal, setRemoveSemesterModal, removeSemester }: 
    { showRemoveSemesterModal: boolean, setRemoveSemesterModal: (b: boolean) => void, removeSemester: () => void }): JSX.Element {
    const hideRemoveModal = () => setRemoveSemesterModal(false);
    const handleShow = () => setRemoveSemesterModal(true);

    function deleteSemester() {
        removeSemester();
        hideRemoveModal();
    }

    return (
        <>
            <Button variant="outline-dark" className="m-3" onClick={handleShow}>-</Button>

            <Modal show={showRemoveSemesterModal} onHide={hideRemoveModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Please Read Carefully</Modal.Title>
                </Modal.Header>
                <Modal.Body>What you are about to do is delete the semester that you are currently on. If you want to cancel your action, 
                    either click on the <b>X</b> in the corner or click <b>Cancel</b>. However, if you would like to continue, please
                    click <b>Delete</b> Semester 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setRemoveSemesterModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={deleteSemester}>
                        Delete Semester
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
