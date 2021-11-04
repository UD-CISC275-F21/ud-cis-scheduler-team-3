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
        courses: [COURSES[0],COURSES[1],COURSES[2],COURSES[3],COURSES[4]],
        title: "Freshman Fall Semester"
    }, 
    {    
        courses: [COURSES[5],COURSES[6],COURSES[7],COURSES[8],COURSES[9]],
        title: "Freshman Spring Semester"
    },
    {
        courses: [COURSES[10],COURSES[11],COURSES[12],COURSES[13],COURSES[14]],
        title: "Sophmore Fall Semester"
    },
    {
        courses: [COURSES[15],COURSES[16],COURSES[17],COURSES[18],COURSES[19]],
        title: "Sophmore Spring Semester"
    }
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
                    <button onClick={() => setSemester(semesterList[0])}>1</button>
                    <button onClick={() => setSemester(semesterList[1])}>2</button>
                    <button onClick={() => setSemester(semesterList[2])}>3</button>
                    <button onClick={() => setSemester(semesterList[3])}>4</button>
                </Tab>
            </Tabs>
            { /*<EditCourse visible={ visible } setVisible={ setVisible } editCourse={ EditCourse }></EditCourse> */}
        </div>
    );
}

export default App; 