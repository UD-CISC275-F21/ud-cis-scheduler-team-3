import React from "react";
import { Course as CourseIF } from "./Fall-Semester";

export function MapCourses({semester}: {semester: CourseIF[]}): JSX.Element {
    return (
        <ul>
            {semester.map((course: CourseIF): JSX.Element => 
                <><li key={course.code}></li><span>{course.title}</span></>
            )}
        </ul>
    );
}