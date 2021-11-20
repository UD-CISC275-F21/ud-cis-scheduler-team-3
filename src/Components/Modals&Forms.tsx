import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Course } from "../Interfaces/Course";
import { Semester } from "../Interfaces/Semester";

export function CodeForm({ course, newCode, setCode }: { course: Course, newCode: string, setCode: (newCode: string) => void }): JSX.Element {
    return (
        <Form>
            <Form.Group className='mb-3' id='editCourse.courseTitle'>
                <Form.Control as="textarea" placeholder={course.code} rows={1}
                    value={newCode} onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCode(ev.target.value)} />
                <Form.Text className="text-muted">Please enter the course&#39;s code here.</Form.Text>
            </Form.Group>
        </Form>
    );
}

export function TitleForm({ course, newTitle, setTitle }: { course: Course, newTitle: string, setTitle: (newTitle: string) => void }): JSX.Element {
    return (
        <Form>
            <Form.Group className='mb-3' id='editCourse.courseTitle'>
                <Form.Control as="textarea" placeholder={course.title} rows={3}
                    value={newTitle} onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(ev.target.value)} />
                <Form.Text className="text-muted">Please enter the course&#39;s title here.</Form.Text>
            </Form.Group>
        </Form>
    );
}

export function CreditsForm({ course, newCredits, setCredits }: { course: Course, newCredits: string, setCredits: (newCredits: string) => void }): JSX.Element {
    return (
        <Form>
            <Form.Group className='mb-3' id='editCourse.courseTitle'>
                <Form.Control as="textarea" placeholder={course.credits} rows={1}
                    value={newCredits} onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setCredits(ev.target.value)} />
                <Form.Text className="text-muted">Please enter the course&#39;s credits here.</Form.Text>
            </Form.Group>
        </Form>
    );
}

export function DescriptionForm({ course, newDescription, setDescription }: { course: Course, newDescription: string, setDescription: (newDescription: string) => void }): JSX.Element {
    return (
        <Form>
            <Form.Group className='mb-3' id='editCourse.courseDescription'>
                <Form.Control as="textarea" placeholder={course.description} rows={5}
                    value={newDescription} onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(ev.target.value)} />
                <Form.Text className="text-muted">Please enter the course&#39;s description here.</Form.Text>
            </Form.Group>
        </Form>
    );
}

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

export function AddSemesterModal({  showAddSemesterModal, setShowAddSemesterModal, addSemester }: 
    { showAddSemesterModal: boolean, setShowAddSemesterModal: (b: boolean) => void, addSemester: (s: string) => void }): JSX.Element {
    const [semester, setSemester] = useState<string>("");
    const hideAddModal = () => setShowAddSemesterModal(false);
    const handleShow = () => setShowAddSemesterModal(true);

    function saveSemester() {
        addSemester(semester);
        hideAddModal();
    }

    return (
        <div>
            <Button variant="outline-dark" className="m-3" onClick={handleShow}>+</Button>

            <Modal show={ showAddSemesterModal } onHide={ hideAddModal }>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Semester</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Semester</Form.Label>
                            <Form.Control as="select"
                                value={semester}
                                onChange={
                                    e => {
                                        setSemester(e.target.value);
                                    }}>
                                <option value="">Select A Semester</option>
                                <option value="Freshman Winter Semester">Freshman Winter Semester</option>
                                <option value="Freshman Summer Semester">Freshman Summer Semester</option>
                                <option value="Sophmore Winter Semester">Sophmore Winter Semester</option>
                                <option value="Sophmore Summer Semester">Sophmore Summer Semester</option>
                                <option value="Junior Winter Semester">Junior Winter Semester</option>
                                <option value="Junior Summmer Semester">Junior Summer Semester</option>
                                <option value="Senior Winter Semester">Senior Winter Semester</option>
                                <option value="Senior Summer Semester">Senior Summer Semester</option>
                            </Form.Control>
                            <Form.Text className="text-muted">
                                Please choose a semester you would like to add here...
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowAddSemesterModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveSemester}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export function RemoveSemesterModal({  showRemoveSemesterModal, setRemoveSemesterModal, removeSemester }: 
    { showRemoveSemesterModal: boolean, setRemoveSemesterModal: (b: boolean) => void, removeSemester: () => void }): JSX.Element {
    const hideRemoveModal = () => setRemoveSemesterModal(false);
    const handleShow = () => setRemoveSemesterModal(true);

    function deleteSemester() {
        removeSemester();
        hideRemoveModal();
    }

    return (
        <>
            <Button variant="outline-dark" className="m-3" onClick={handleShow}>-</Button>

            <Modal show={showRemoveSemesterModal} onHide={hideRemoveModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Please Read Carefully</Modal.Title>
                </Modal.Header>
                <Modal.Body>What you are about to do is delete the semester that you are currently on. If you want to cancel your action, 
                    either click on the <b>X</b> in the corner or click <b>Cancel</b>. However, if you would like to continue, please
                    click <b>Delete</b> Semester 
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setRemoveSemesterModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={deleteSemester}>
                        Delete Semester
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
