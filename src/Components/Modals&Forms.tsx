import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Course } from "../Interfaces/Course";

export function CodeForm({course, newCode, setCode}: {course: Course, newCode:string, setCode:(newCode:string)=>void}): JSX.Element {
    return (
        <Form>
            <Form.Group className='mb-3' id='editCourse.courseTitle'>
                <Form.Control as="textarea" placeholder={ course.code } rows={ 1 } 
                    value={ newCode } onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCode(ev.target.value)} />
                <Form.Text className="text-muted">Please enter the course&#39;s code here.</Form.Text>
            </Form.Group>
        </Form>
    );
}

export function TitleForm({course, newTitle, setTitle}: {course: Course, newTitle:string, setTitle:(newTitle:string)=>void}): JSX.Element {
    return (
        <Form>
            <Form.Group className='mb-3' id='editCourse.courseTitle'>
                <Form.Control as="textarea" placeholder={ course.title } rows={ 3 } 
                    value={ newTitle } onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(ev.target.value)} />
                <Form.Text className="text-muted">Please enter the course&#39;s title here.</Form.Text>
            </Form.Group>
        </Form>
    );
}

export function CreditsForm({course, newCredits, setCredits}: {course: Course, newCredits:string, setCredits:(newCredits:string)=>void}): JSX.Element {
    return (
        <Form>
            <Form.Group className='mb-3' id='editCourse.courseTitle'>
                <Form.Control as="textarea" placeholder={ course.credits } rows={ 1 } 
                    value={ newCredits } onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCredits(ev.target.value)} />
                <Form.Text className="text-muted">Please enter the course&#39;s credits here.</Form.Text>
            </Form.Group>
        </Form>
    );
}

export function DescriptionForm({course, newDescription, setDescription}: {course: Course, newDescription:string, setDescription:(newDescription:string)=>void}): JSX.Element {
    return (
        <Form>
            <Form.Group className='mb-3' id='editCourse.courseDescription'>
                <Form.Control as="textarea" placeholder={ course.description } rows={ 5 } 
                    value={ newDescription } onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(ev.target.value)} />
                <Form.Text className="text-muted">Please enter the course&#39;s description here.</Form.Text>
            </Form.Group>
        </Form>
    );
}

export function AddCourseModal({showAddModal, setShowAddModal, addCourse}: 
    {showAddModal: boolean, setShowAddModal: (b:boolean)=>void, addCourse: (c: Course)=>void}): JSX.Element{
    const [code, setCode] = useState<string>("EX: CISC 275");
    const [title, setTitle] = useState<string>("EX: Introduction to Software Engineering");
    const [credits, setCredits] = useState<string>("EX: 3");
    const [description, setDescription] = useState<string>("EX: Hi Dr. Bart");
    const hideAddModal = () => setShowAddModal(false);

    function saveCourse() {
        addCourse({
            code, title, credits, description
        });
        hideAddModal();
    }
    
    return (
        <Modal show={ showAddModal } onHide={ hideAddModal }>
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
                <Button variant="outline-danger" onClick={ () => setShowAddModal(false) }>Cancel</Button>
                <Button variant="info" onClick={ saveCourse }>Add</Button>
            </Modal.Footer>
        </Modal>);
}

export function RemoveCourseModal({showRemoveModal, setShowRemoveModal, removeCourse}:
    {showRemoveModal: boolean, setShowRemoveModal: (b:boolean)=>void, removeCourse: (s:string)=>void}): JSX.Element {
    const [removeCode, setRemoveCode] = useState<string>("EX: CISC 108");
    const hideRemoveModal = () => setShowRemoveModal(false);
    
    function saveCode() {
        removeCourse(removeCode);
        hideRemoveModal();
    }

    return (
        <Modal show={ showRemoveModal } onHide={ hideRemoveModal }>
            <Modal.Header closeButton>
                <Modal.Title>Add New Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="addCourseForm.promptTextArea">
                        <Form.Label>Enter Course Code</Form.Label>
                        <Form.Control as="textarea" rows={1}
                            value={ removeCode }
                            onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setRemoveCode(ev.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={ () => setShowRemoveModal(false) }>Cancel</Button>
                <Button variant="warning" onClick={ saveCode }>Remove</Button>
            </Modal.Footer>
        </Modal>);
}

export function AddSemesterModal(): JSX.Element {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-dark" onClick={ handleShow }>Add</Button>

            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>More school ugh</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Semester</Form.Label>
                            <Form.Control type="text" placeholder="Name of Semester" />
                            <Form.Text className="text-muted">
                                Please add a semester here...
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleClose }>
                        Close
                    </Button>
                    <Button variant="primary" onClick={ handleClose }>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
