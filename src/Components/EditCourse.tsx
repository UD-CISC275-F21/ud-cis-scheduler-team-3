import React from "react";
import { Form, Modal } from "react-bootstrap";
import "../css/editButton.css";

// https://github.com/UD-CISC275-F21/ta-trainer/blob/main/src/components/AddCardModal.tsx
export function EditCourse({visible, setVisible}: {visible: boolean, setVisible: (b: boolean)=>void}): JSX.Element {
    const courseEdit = prompt("Please enter the Course Code. (ex: CISC 108)");
    const hide = () => setVisible(false);
    setVisible(true);
    return (
        <Modal show= { visible } onHide = { hide }>
            <Modal.Header closeButton>
                <Modal.Title>Edit { courseEdit }</Modal.Title>
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
        </Modal>);
}
