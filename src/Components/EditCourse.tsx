import React from "react";
import { Button, Form, Modal } from "react-bootstrap";


// https://github.com/UD-CISC275-F21/ta-trainer/blob/main/src/components/AddCardModal.tsx
export function EditCourse({visible, setVisible}: {visible: boolean, setVisible: (b: boolean)=>void}): JSX.Element {
    const hideModal = () => setVisible(false);
    
    function editCourse(): void {
        console.log("in editCourse()");
    }
    
    function saveEdit(): void {
        console.log("in saveEdit()");
        editCourse();
        hideModal();
    }
    
    return (
        <Modal show={ visible } onHide={ hideModal }>
            <Modal.Header>
                <Modal.Title>Edit Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3' id='editCourse.courseCode'>
                        <Form.Label>Course Code</Form.Label>
                        <Form.Control as="textarea" rows={1}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' id='editCourse.courseTitle'>
                        <Form.Label>Course Title</Form.Label>
                        <Form.Control as="textarea" rows={1}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' id='editCourse.courseCredits'>
                        <Form.Label>Course Credits</Form.Label>
                        <Form.Control as="textarea" rows={1}></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' id='editCourse.courseDescription'>
                        <Form.Label>Course Description</Form.Label>
                        <Form.Control as="textarea" rows={5}></Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={ hideModal }>Cancel</Button>
                <Button variant="primary" onClick={ saveEdit }>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}
