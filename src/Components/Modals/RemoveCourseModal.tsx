import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Course } from "../../Interfaces/Course";
import { Semester } from "../../Interfaces/Semester";

export function RemoveCourseModal({ showRemoveModal, setShowRemoveModal, removeCourse, currentSemester }:
    { showRemoveModal: boolean, setShowRemoveModal: (b: boolean) => void, removeCourse: (s: string) => void, currentSemester: Semester}): JSX.Element {
    const [removeCode, setRemoveCode] = useState<string>("");
    const hideRemoveModal = () => setShowRemoveModal(false);

    function saveCode() {
        removeCourse(removeCode);
        hideRemoveModal();
    }

    return (
        <Modal show={ showRemoveModal } onHide={ hideRemoveModal }>
            <Modal.Header closeButton>
                <Modal.Title>Remove Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="addCourseForm.promptTextArea">
                        <Form.Control placeholder={"Select a course to remove."} readOnly />
                        <Form.Select value={ removeCode } onChange={(ev: React.ChangeEvent<HTMLSelectElement>) => setRemoveCode(ev.target.value)}>
                            {currentSemester.courses.map((course: Course): JSX.Element => {
                                return <option key={ course.code }>{ course.code }</option>;
                            })};
                        </Form.Select>
                        <Form.Text className="text-muted">Select the course you would like removed from this drop-down menu.</Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={() => setShowRemoveModal(false)}>Cancel</Button>
                <Button variant="warning" onClick={ saveCode }>Remove</Button>
            </Modal.Footer>
        </Modal>);
}