import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Course } from "../../Interfaces/Course";

export function AddCourseModal({ showAddModal, setShowAddModal, addCourse }:
    { showAddModal: boolean, setShowAddModal: (b: boolean) => void, addCourse: (c: Course) => void }): JSX.Element {
    const [code, setCode] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [credits, setCredits] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const hideAddModal = () => setShowAddModal(false);

    function saveCourse() {
        addCourse({
            code, title, credits, description
        });
        hideAddModal();
    }

    return (
        <Modal show={showAddModal} onHide={hideAddModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="addCourseForm.promptTextArea">
                        <Form.Label>Course Code</Form.Label>
                        <Form.Control as="textarea" placeholder={"CISC 275"} rows={1}
                            value={code} onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCode(ev.target.value)} />
                        <Form.Text className="text-muted">Please enter the course&#39;s code here.</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="addCourseForm.promptTextArea">
                        <Form.Label>Course Title</Form.Label>
                        <Form.Control as="textarea" placeholder={"Introduction to Software Enginerring"} rows={3}
                            value={title} onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(ev.target.value)} />
                        <Form.Text className="text-muted">Please enter the course&#39;s title here.</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="addCourseForm.promptTextArea">
                        <Form.Label>Course Credits</Form.Label>
                        <Form.Control as="textarea" placeholder={"3"} rows={1}
                            value={credits} onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCredits(ev.target.value)} />
                        <Form.Text className="text-muted">Please enter the course&#39;s credits here.</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="addCourseForm.promptTextArea">
                        <Form.Label>Course Description</Form.Label>
                        <Form.Control as="textarea" placeholder={"Object oriented software design and development through use of an object oriented programming language."} rows={5}
                            value={description} onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(ev.target.value)} />
                        <Form.Text className="text-muted">Please enter the course&#39;s description here.</Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={() => setShowAddModal(false)}>Cancel</Button>
                <Button variant="info" onClick={saveCourse}>Add</Button>
            </Modal.Footer>
        </Modal>);
}