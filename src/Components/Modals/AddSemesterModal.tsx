import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
                    <Button aria-label="Cancel" variant="secondary" onClick={() => setShowAddSemesterModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={saveSemester}>
                        Add Semester
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}