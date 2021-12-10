import React from "react";
import { Form } from "react-bootstrap";
import { Course } from "../../../Interfaces/Course";

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