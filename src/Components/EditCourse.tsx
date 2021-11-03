import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Course as CourseFF } from "./Fall-Semester";


// https://github.com/UD-CISC275-F21/ta-trainer/blob/main/src/components/AddCardModal.tsx
export function EditCourse({visible, setVisible, editCourse}: {visible: boolean, setVisible: (b: boolean)=>void, editCourse: (c: CourseFF)=>void}): JSX.Element {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const hideModal = () => setVisible(false);
    const courseEdit = prompt("Enter course code (ex: \"CISC 108\")");
    
    /*
    function editCourse(): void {
        console.log("in editCourse()");
    }
    */

    function saveEdit(): void {
        console.log("in saveEdit()");
        //editCourse();
        hideModal();
    }
    
    return (
        <Modal show={ visible } onHide={ hideModal }>
            <Modal.Header>
                <Modal.Title>Edit Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3' id='editCourse.courseTitle'>
                        <Form.Label>Course Title</Form.Label>
                        <Form.Control as="textarea" rows={1} value={ title } onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(ev.target.value)}/>
                    </Form.Group>
                    <Form.Group className='mb-3' id='editCourse.courseDescription'>
                        <Form.Label>Course Description</Form.Label>
                        <Form.Control as="textarea" rows={5} value={ description } onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(ev.target.value)}/>
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