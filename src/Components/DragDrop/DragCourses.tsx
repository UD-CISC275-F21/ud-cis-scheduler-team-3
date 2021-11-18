import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { SemesterTable } from "../Semesters/SemesterTable";
import { Course } from "../../Interfaces/Course";


export function CoursesCard({course, title}: {course: Course, title: string}): JSX.Element {
    const [{ isDragging}, dragRef] = useDrag({

        type: "courses",
        item: {course, title},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    return (
        <div ref={dragRef}>
            {title}
            {isDragging}
        </div>
    );
}

export default CoursesCard;


