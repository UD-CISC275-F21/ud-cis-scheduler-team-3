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

export function AddCourseModal({showModal, setShowModal, addCourse}: 
    {showModal: boolean, setShowModal: (b:boolean)=>void, addCourse: (c: Course)=>void}): JSX.Element{
    const [code, setCode] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [credits, setCredits] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const hideModal = () => setShowModal(false);

    function saveCourse() {
        addCourse({
            code, title, credits, description
        });
        hideModal();
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
                        <Form.Control as="textarea" rows={1}
                            value={ code }
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCode(ev.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="addCourseForm.promptTextArea">
                        <Form.Label>Course Title</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            value={ title }
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(ev.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="addCourseForm.promptTextArea">
                        <Form.Label>Course Credits</Form.Label>
                        <Form.Control as="textarea" rows={1}
                            value={ credits }
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCredits(ev.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="addCourseForm.promptTextArea">
                        <Form.Label>Course Description</Form.Label>
                        <Form.Control as="textarea" rows={5}
                            value={ description }
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(ev.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={ () => setShowModal(false) }>Close</Button>
                <Button variant="info" onClick={ saveCourse }>Add</Button>
            </Modal.Footer>
        </Modal>);
}
