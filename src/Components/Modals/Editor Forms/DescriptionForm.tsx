import React from "react";
import { Form } from "react-bootstrap";
import { Course } from "../../../Interfaces/Course";

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