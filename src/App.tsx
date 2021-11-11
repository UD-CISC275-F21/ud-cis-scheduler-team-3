import "./css/App.css";
import React, { useState } from "react";
import { AddSemesterModal } from "./Components/AddSemesterModal";
import Tab from "./Components/Tab";
import COURSES from "./Assets/Courses.json";
import { Course, Semester, SemesterTable } from "./Components/SemesterTable";
import PopUp from "./Components/PopUpInstructions";
import { CloseButton, Dropdown, DropdownButton } from "react-bootstrap";
import { ControlPanelButtons } from "./Components/ControlPanel";
import { AddCourseModal, RemoveCourseModal } from "./Components/Modals&Forms";

function App(): JSX.Element { // jsx.element = very important return type, function has to return jsx.element
    const defaultSemesters: Semester[] = [{
        courses: [COURSES[0], COURSES[1], COURSES[2], COURSES[3], COURSES[4]],
        title: "Freshman Fall Semester"
    },
    {
        courses: [COURSES[5], COURSES[6], COURSES[7], COURSES[8], COURSES[9]],
        title: "Freshman Spring Semester"
    },
    {
        courses: [COURSES[10], COURSES[11], COURSES[12], COURSES[13], COURSES[14]],
        title: "Sophmore Fall Semester"
    },
    {
        courses: [COURSES[15], COURSES[16], COURSES[17], COURSES[18], COURSES[19]],
        title: "Sophmore Spring Semester"
    },
    {
        courses: [COURSES[20], COURSES[21], COURSES[22], COURSES[23], COURSES[24]],
        title: "Junior Fall Semester"
    },
    {
        courses: [COURSES[25], COURSES[26], COURSES[27], COURSES[28], COURSES[29]],
        title: "Junior Spring Semester"
    },
    {
        courses: [COURSES[30], COURSES[31], COURSES[32], COURSES[33], COURSES[34]],
        title: "Senior Fall Semester"
    },
    {
        courses: [COURSES[35], COURSES[36], COURSES[37], COURSES[38], COURSES[39]],
        title: "Senior Spring Semester"
    },
    ];
    const [semesterList, setSemesterList] = useState(defaultSemesters);
    const [currentSemester, setCurrentSemester] = useState<Semester>(semesterList[0]);
    const [editing, setEditing] = useState<boolean>(false);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const [showRemoveModal, setShowRemoveModal] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);
    const togglePopUp = () => {
        setIsOpen(!isOpen);
    };

    

    //reset/set default semester components
    const [Semester, setDefaultSemester] = useState(semesterList);



    function removeSemester() {
        const newSemesterList = semesterList.filter(sem => sem !== currentSemester);
        setSemesterList(newSemesterList);
        setCurrentSemester(newSemesterList[0]);
    }


    /*
    function addSemester() {
        const newSemesterList = semesterList.filter(sem => sem);
        setSemesterList(newSemesterList);
        setCurrentSemester(newSemesterList[0]);
    }
    */

    function clearSemester() {
        setSemesterList([]);
    }

    function addCourse(newCourse: Course): void {
        setCurrentSemester({title: currentSemester.title, courses: [...currentSemester.courses, newCourse]});
    }

    function removeCourse(removeCode: string): void {
        setCurrentSemester({title: currentSemester.title, courses: currentSemester.courses.filter(course => course.code != removeCode)});
    }
    
    return (
        <div>
            <input type="button"
                value="Click to View Instructions"
                onClick={togglePopUp} />
            <p> Step by Step Instructions To Navigate Our Site </p>
            {isOpen && <PopUp content={"Course Selector -> Choose Semester -> Make Necessary Semester Changes -> Add/Remove If Necessary"} handleClose={() => setIsOpen(false)} />}         
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
                    <p>The table below is a structured set of data made up of courses that
                        most Computer Science B.S. majors have to take. This table allows
                        you to quickly and easily look through all the semesters (Freshman
                        to Senior). These semesters default to courses that are recommended
                        by the <a href="https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf">4 Year Path </a>
                        to graduate on time (by the University of Delaware). However, the
                        tables can be manipulated in a way that can fit anyone’s academic needs.</p>
                    <DropdownButton id="dropdown-basic-button" title="Semesters">
                        {semesterList.map(semi => {
                            return (
                                <Dropdown.Item onClick={() => setCurrentSemester(semi)} key={semi.title}>{semi.title}</Dropdown.Item>
                            );
                        })}
                    </DropdownButton>
                    <button className="Clear-Semester" onClick={() => clearSemester()}>Clear</button>
                    <CloseButton className="Close-Button" onClick={() => removeSemester()}/>
                    <AddSemesterModal />
                    <button className="Clear-Semester" onClick={() => clearSemester()}>Clear</button>
                    <button className="Set Default Semetester" onClick={() => setDefaultSemester(Semester)}>Reset</button>
                    <SemesterTable editing={editing} setEditing={setEditing} currentSemester={currentSemester} setCurrentSemester={setCurrentSemester}></SemesterTable>
                    <ControlPanelButtons setShowAddModal={ setShowAddModal } setShowRemoveModal={ setShowRemoveModal } setEditing={ setEditing }></ControlPanelButtons>
                    <AddCourseModal showAddModal={ showAddModal } setShowAddModal={ setShowAddModal } addCourse={ addCourse }></AddCourseModal>
                    <RemoveCourseModal showRemoveModal={ showRemoveModal } setShowRemoveModal={ setShowRemoveModal } removeCourse={ removeCourse }></RemoveCourseModal>
                </span>
            </Tab>
        </div>

    );
}

export default App;

