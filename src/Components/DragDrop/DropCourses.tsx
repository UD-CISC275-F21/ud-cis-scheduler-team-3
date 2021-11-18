import React, { useState } from "react";
/*import { useDrop } from "react-dnd";
import { CoursesCard } from "./DragCourses"
import { SemesterTable } from "../Semesters/SemesterTable";
import { defaultSemesters } from "../Semesters/DefaultSemesters";
import "Courses.json";
import { Course } from "../../Interfaces/Course";
import { Semester } from "../../Interfaces/Semester";
import { convertTypeAcquisitionFromJson } from "typescript";
import { useContext } from "react";

export const COURSES = []

export const DropCourses = () => {
    const [box, setBox] = useState([])
    const [{isOver}, dropRef] = useDrop({
        accept: "courses",
        drop: (item) => setBox((box) => !box.includes(item) ? [...box, item] : box),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    return (
        <React.Fragment>
            <div>
                {COURSES.map(course => <CoursesCard id={course.id} title={course.title} />)}
                {isOver}
            </div>
        </React.Fragment>
    )
}

/*
export function coursesDrop(): JSX.Element {
    const [action, setAction] = useState([]);
    const [courses, setCourses] = useDrop({
        accept: 'courses',
        drop: (item) => setAction((actions) => !actions.includes(item) ? [...actions, item] : actions),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    })

    return (
        <React.Fragment>
            <div className="courses">
                {Course.map(courses=> <CoursesCard draggable id={courses.id} name={courses.name} />)}
            </div>
            <div className="case" ref={dropRef}>
                {actions.map(courses => <CoursesCard id={courses.id} name={courses.name}/>)}
                {isOver && <div> Leave Courses Here!</div>}
            </div>
        </React.Fragment>
    )
}

export default coursesDrop;
*/