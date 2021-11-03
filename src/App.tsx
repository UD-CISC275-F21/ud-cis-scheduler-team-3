import React, { useState } from "react";
import COURSES from "./Assets/Courses.json";
import "./css/App.css";
import "./css/editButton.css";
import { Course as CourseFF } from "./Components/SemesterTable";
import Tabs from "./Components/tabs/Tabs";
import Tab from "./Components/tabs/Tab";
import { EditCourse } from "./Components/EditCourse";
import { ControlPanel } from "./Components/ControlPanel";
import { Semester, SemesterTable } from "./Components/SemesterTable";


function App(): JSX.Element { // jsx.element = very important return type, function has to return jsx.element
    const [course, setCourse] = useState<CourseFF[]>(COURSES);
    const [visible, setVisible] = useState<boolean>(false);
    
    const semesterList: Semester[] = [{
        courses: [{code: "CISC 108", title: "Introdction to Computer Science I", credits: 3, description: "COREQ: MATH 115, MATH 117, or higher math course or math placement."},
            {code: "EGGG 101", title: "Introduction to Engineering (FYE)", credits: 2, description: "First Year Experience"},
            {code: "MATH 241", title: "Analytic Geometry & Calculus A", credits: 4, description: " MATH 117 or acceptable score on the Math Placement Exam in accordance with current standards determined by the Department of Mathematical Sciences. RESTRICTIONS: Students who received credit in MATH 242 or MATH 243 are not eligible to take this course without permission."},
            {code: "ENGL 110", title: "Seminar in Composition", credits: 3, description: "Required of all students. Should be taken first year on campus"},
            {code: "", title: "Breath Requirement Elective 1", credits: 3, description: "Required of all students."}],
        title: "Freshman Fall Semester"
    }, {    
        courses: [{code: "CISC 181", title: "Introdction to Computer Science II", credits: 3, description: "PREREQ: Grade of C- or better in CISC108 or CISC106. COREQ: MATH221, MATH241, or a higher level math course or math placement."},
            {code: "CISC 210", title: "Introduction to Systems Programming", credits: 3, description: "PREREQ: A grade of C- or better in CISC106 or CISC108. COREQ: MATH221 or MATH241 or a higher level math course or math placement."},
            {code: "MATH 242", title: "Analytic Geometry & Calculus B", credits: 4, description: "PREREQ: MATH232 or MATH241. RESTRICTIONS: Students who received credit in MATH243 are not eligible to take this course without permission."},
            {code: "", title: "Laboratory Science I", credits: 4, description: "Required of all students. Any science with a lab"},
            {code: "", title: "Breath Requirement Elective 2", credits: 3, description: "Required of all students."}],
        title: "Freshman Spring Semester"
    }, {
        courses: [{code: "CISC 220", title: "Data Structures", credits: 3, description: "PREREQ: A minimum grade of C- in CISC210. COREQ: MATH210 or MATH241."},
            {code: "CISC 260", title: "Machine Org. & Assembly Language", credits: 3, description: "PREREQ: A minimum grade of C- in CISC210."},
            {code: "MATH 210", title: "Discrete Mathematics I", credits: 3, description: "COREQ: MATH241, MATH242 or MATH232"},
            {code: "", title: "Laboratory Science 2", credits: 4, description: "Required of all students. Any science with a lab"},
            {code: "", title: "Breath Requirement Elective 3", credits: 3, description: "Required of all students."}],
        title: "Sophmore Fall Semester"}
    ];

    const [semester, setSemester] = useState<Semester>(semesterList[0]);
    
    function editCourse(c: CourseFF): void {
        setCourse([...course, c]); // fix this line later
    }
    
    return (
        <div>
            <Tabs>
                <Tab title="Welcome and navigating our site">Welcome To Team 3s
                    <header>
                        UD CIS Scheduler
                        <p>Authors: Ren Ross, Abel Juarez, and Ahilyn Dipre</p>
                        <p>Our goal is to help CISC students plan out their semesters,
                            by providing templates of potential Fall/Spring semesters and even
                            Winter and Summer.</p>
                        <p>This site will serve as a way for students
                            to keep track of the classes they have taken and which ones
                            they need to take next.
                        </p>
                        <p>Recommended 4 Year Path To Graduate on Time: <a href="https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf">Suggested Plan</a></p>
                    </header>
                    <h1>Getting Started</h1>
                    <ul>
                        <li>Click Course Selector</li>
                        <li>Choose designated semester which you want to plan</li>
                        <li>Click buttons below Semester Schedules to view different semesters</li>
                        <li>Options to start planning session all over will be available</li>
                        <li>To be continued</li>
                    </ul>
                </Tab>
                <Tab title="Course selector">
                    <ControlPanel showEditModal={ setVisible }></ControlPanel>
                    <SemesterTable currentSemester={semester}></SemesterTable>
                    <button onClick={() => setSemester(semesterList[0])}></button>
                </Tab>
            </Tabs>
            { /*<EditCourse visible={ visible } setVisible={ setVisible } editCourse={ EditCourse }></EditCourse> */}
        </div>
    );
}

export default App; 