import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Course } from "./SemesterTable";

export function TitleForm({newTitle, setTitle}: {newTitle:string, setTitle:(newTitle:string)=>void}): JSX.Element {
    return (
        <Form>
            <Form.Group className='mb-3' id='editCourse.courseTitle'>
                <Form.Control as="textarea" rows={ 1 } value={ newTitle } onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(ev.target.value)} />
            </Form.Group>
        </Form>
    );
}

export function DescriptionForm({newDescription, setDescription}: {newDescription:string, setDescription:(newDescription:string)=>void}): JSX.Element {
    return (
        <Form>
            <Form.Group className='mb-3' id='editCourse.courseDescription'>
                <Form.Control as="textarea" rows={ 5 } value={ newDescription } onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(ev.target.value)} />
            </Form.Group>
        </Form>
    );
}

export function AddCourseModal(): JSX.Element{
    const [courseCode, setCourseCode] = useState<string>("");
    const [courseTitle, setCourseTitle] = useState<string>("");
    const [courseCredits, setCourseCredits] = useState<string>("");
    const [courseDescription, setCourseDescription] = useState<string>("");
    
    const [showModal, setShowModal] = useState<boolean>(false);
    const hideModal = () => setShowModal(false);

    function saveCourse() {
        console.log("woo!");
    }
    
    return (
        <Modal show={ showModal } onHide={ hideModal }>
            <Modal.Header closeButton>
                <Modal.Title>Add New Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="addCourseForm.promptTextArea">
                        <Form.Label>Course Code</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            value={ courseCode }
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCourseCode(ev.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="addCourseForm.promptTextArea">
                        <Form.Label>Course Title</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            value={ courseTitle }
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCourseTitle(ev.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="addCourseForm.promptTextArea">
                        <Form.Label>Course Credits</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            value={ courseCredits }
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCourseCredits(ev.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="addCourseForm.promptTextArea">
                        <Form.Label>Course Description</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            value={ courseDescription }
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCourseDescription(ev.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={ hideModal }>Close</Button>
                <Button variant="info" onClick={ saveCourse }>Add</Button>
            </Modal.Footer>
        </Modal>);
}
