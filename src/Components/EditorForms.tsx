import React from "react";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
