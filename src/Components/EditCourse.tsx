import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// https://github.com/UD-CISC275-F21/ta-trainer/blob/main/src/components/AddCardModal.tsx
export function EditCourse(): JSX.Element {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    return (
        <Form>
            <Form.Group className='mb-3' id='editCourse.courseTitle'>
                <Form.Label>Course Title</Form.Label>
                <Form.Control as="textarea" rows={1} value={ title } onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setTitle(ev.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' id='editCourse.courseDescription'>
                <Form.Label>Course Description</Form.Label>
                <Form.Control as="textarea" rows={5} value={ description } onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(ev.target.value)} />
            </Form.Group>
        </Form>
    );
}
