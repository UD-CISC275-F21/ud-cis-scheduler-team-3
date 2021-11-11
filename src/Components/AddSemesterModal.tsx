//import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";


export function AddSemesterModal(): JSX.Element {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>Add</Button>

            <Modal show={show} onHide={handleClose}>
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
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

//render(<AddSemesterModal />);