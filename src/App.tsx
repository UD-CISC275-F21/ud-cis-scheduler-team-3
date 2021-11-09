import "./css/App.css";
import React, {useState} from "react";
import Tab from "./Components/Tab";
import COURSES from "./Assets/Courses.json";
import { Semester, SemesterTable } from "./Components/SemesterTable";

function App(): JSX.Element { // jsx.element = very important return type, function has to return jsx.element
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
    },
    {
        courses: [COURSES[20],COURSES[21],COURSES[22],COURSES[23],COURSES[24]],
        title: "Junior Fall Semester"
    },
    {
        courses: [COURSES[25],COURSES[26],COURSES[27],COURSES[28],COURSES[29]],
        title: "Junior Spring Semester"
    },
    {
        courses: [COURSES[30],COURSES[31],COURSES[32],COURSES[33],COURSES[34]],
        title: "Senior Fall Semester"
    },
    {
        courses: [COURSES[35],COURSES[36],COURSES[37],COURSES[38],COURSES[39]],
        title: "Senior Spring Semester"
    }
    ];

    const [addSemester, settingSemester] = useState<Semester>(semesterList[0]);
    return (
        <div>
            <Tab>
                <span title="Welcome And Navigating Our Site">
                    <body>
                        <header>
                            <p>Welcome to Team 3s UD CIS Scheduler</p>
                            <p>Authors: Ren Ross, Abel Juarez, and Ahilyn Dipre</p>
                            <p>Our goal is to help CISC students plan out their semesters,
                            by providing templates of potential Fall/Spring semesters and even
                            Winter and Summer.</p>
                            <p>This site will serve as a way for students
                            to keep track of the classes they have taken and which ones
                            they need to take next.
                            </p>
                            <p>Students will get the option to remove a Semester if they are not pleased with their schedule</p>
                            <p>Students will be able to edit in classes in case our default schedules dont match theirs</p>
                            <p>Recommended 4 Year Path To Graduate on Time: <a href="https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf">Suggested Plan</a></p>
        
                            <h1>Getting Started</h1>
                            <ul>
                                <li>Click Course Selector</li>
                                <li>Choose designated semester which you want to plan</li>
                                <li>Click buttons below Semester Schedules to view different semesters</li>
                                <li>Options to start planning session all over will be available</li>
                                <li>To be continued</li>
                            </ul>
                        </header>
                    </body>
                </span>
                <span title="Course Selector">
                    <SemesterTable currentSemester={ addSemester } setCurrentSemester={ settingSemester }></SemesterTable>
                    <a><button onClick={() => settingSemester(semesterList[0])}>F (Fall)</button></a>
                    <a><button onClick={() => settingSemester(semesterList[1])}>F (Spring)</button></a>
                    <a><button onClick={() => settingSemester(semesterList[2])}>Sp (Fall)</button></a>
                    <a><button onClick={() => settingSemester(semesterList[3])}>Sp (Spring)</button></a>
                    <a><button onClick={() => settingSemester(semesterList[4])}>J (Fall)</button></a>
                    <a><button onClick={() => settingSemester(semesterList[5])}>J (Spring)</button></a>
                    <a><button onClick={() => settingSemester(semesterList[6])}>Se (Fall)</button></a>
                    <a><button onClick={() => settingSemester(semesterList[7])}>Se (Spring)</button></a>
                </span>
            </Tab>
        </div>

    );
}

export default App;



