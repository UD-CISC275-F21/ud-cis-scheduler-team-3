import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Course as CourseFF } from "./Fall-Semester";



// https://github.com/UD-CISC275-F21/ta-trainer/blob/main/src/components/AddCardModal.tsx
export function EditCourse({visible, setVisible}: // , editCourse, semester, setSemester
    {visible: boolean, setVisible: (b: boolean)=>void, editCourse: (c: CourseFF)=>void, semester: CourseFF[], setSemester: (s: CourseFF[])=>void}): JSX.Element {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const hideModal = () => setVisible(false);
    // const courseEdit = prompt("Enter course code (ex: \"CISC 108\")");
    /*
    function mapCourses(): JSX.Element {
        return (
            <ul>
                {semester.map((course) => 
                    <li key={course.code}></li>
                )}
            </ul>
        );
    }
    
    function editableCourse({course}: {course: CourseFF}): JSX.Element {
        return (
            <div>
                <div>{ course.code }</div>
                <div>{ course.title }</div>
                <div>{ course.credits }</div>
                <div>{ course.description }</div>
            </div>
        );
    }

    function findCourse(): void {
        console.log("woo!");
    }
    */

    function saveEdit(): void {
        console.log("in saveEdit()");
        //editCourse();
        hideModal();
    }
    
    return (
        <Modal show={visible} onHide={hideModal}>
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
                <Button variant="secondary" onClick={hideModal}>Cancel</Button>
                <Button variant="primary" onClick={saveEdit}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}
