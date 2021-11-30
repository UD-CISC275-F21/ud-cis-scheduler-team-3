import React from "react";
import { Form } from "react-bootstrap";
import { Course } from "../../../Interfaces/Course";

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