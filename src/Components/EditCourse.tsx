import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/editButton.css";
import { Course as CourseIF } from "./Fall-Semester";


// https://github.com/UD-CISC275-F21/ta-trainer/blob/main/src/components/AddCardModal.tsx
export function EditCourse({visible, setVisible}: // , editCourse, semester, setSemester
    {visible: boolean, setVisible: (b: boolean)=>void, editCourse: (c: CourseIF)=>void, semester: CourseIF[], setSemester: (s: CourseIF[])=>void}): JSX.Element {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const hideModal = () => setVisible(false);

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
                        <Form.Control as="textarea" rows={1} value={title} onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(ev.target.value)} />
                    </Form.Group>
                    <Form.Group className='mb-3' id='editCourse.courseDescription'>
                        <Form.Label>Course Description</Form.Label>
                        <Form.Control as="textarea" rows={5} value={description} onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(ev.target.value)} />
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
