import React from "react";
import { Form } from "react-bootstrap";
import { Course } from "../../../Interfaces/Course";

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