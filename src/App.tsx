import "./css/App.css";
import React, { useState } from "react";
import Tab from "./Components/Tabs/Tab";
import { SemesterTable } from "./Components/Semesters/SemesterTable";
import PopUp from "./Components/PopUpInstructions";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { ControlPanelButtons, LOCAL_STORAGE } from "./Components/ControlPanel";
import { AddCourseModal, AddSemesterModal, RemoveCourseModal, RemoveSemesterModal } from "./Components/Modals&Forms";
import { Course } from "./Interfaces/Course";
import { Semester } from "./Interfaces/Semester";
import { defaultSemesters } from "./Components/Semesters/DefaultSemesters";

function App(): JSX.Element { // jsx.element = very important return type, function has to return jsx.element
    const [semesterList, setSemesterList] = useState(defaultSemesters);
    const [currentSemester, setCurrentSemester] = useState<Semester>(semesterList[0]);
    const [editing, setEditing] = useState<boolean>(false);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const [showRemoveModal, setShowRemoveModal] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);
    const togglePopUp = () => {
        setIsOpen(!isOpen);
    };

    function hardSave() {
        localStorage.setItem(LOCAL_STORAGE, JSON.stringify(semesterList));
    }
    

    function hardLoad() {
        const scheduleJSON = localStorage.getItem(LOCAL_STORAGE);
        if (scheduleJSON !== null) {
            const parsed = JSON.parse(scheduleJSON);
            setSemesterList(parsed);
        }  else {
            const parsed = JSON.parse("[]");
            setSemesterList(parsed);
        }
    }

    function hardReset() {
        setSemesterList(defaultSemesters);
    }

    function removeSemester() {
        const newSemesterList = semesterList.filter(sem => sem !== currentSemester);
        setSemesterList(newSemesterList);
        setCurrentSemester(newSemesterList[0]);
    }

    function addSemester(newSemester: string) {
        setSemesterList([...semesterList, {title: newSemester, courses: []}]);
    }


    function clearSemester() {
        setCurrentSemester({title: currentSemester.title, courses: currentSemester.courses.filter(COURSES => !COURSES.code)});
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
                value="Instructions"
                onClick={togglePopUp} />
            <p>Navigating Our Site</p>
            {isOpen && <PopUp content={"Course Selector -> Choose Semester -> Make Necessary Semester Changes -> Add/Remove If Necessary"} handleClose={() => setIsOpen(false)} />}         
            <Tab>
                <span title="Welcome">
                    <body>
                        <header>
                            <h1>Team 3s UD Cis Scheduler</h1>
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
                            <h2>Created by: Ren Ross, Abel Juarez and Ahilyn Dipre</h2>
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
                    <AddSemesterModal addSemester={addSemester}/>
                    <RemoveSemesterModal removeSemester={removeSemester}/>
                    <SemesterTable editing={editing} setEditing={setEditing} currentSemester={currentSemester} setCurrentSemester={setCurrentSemester}></SemesterTable>
                    <ControlPanelButtons setShowAddModal={ setShowAddModal } setShowRemoveModal={ setShowRemoveModal } setEditing={ setEditing } clearSemester={ clearSemester } removeSemester={ removeSemester } hardReset={ hardReset } hardSave={ hardSave } hardLoad={ hardLoad }></ControlPanelButtons>
                    <AddCourseModal showAddModal={ showAddModal } setShowAddModal={ setShowAddModal } addCourse={ addCourse }></AddCourseModal>
                    <RemoveCourseModal showRemoveModal={ showRemoveModal } setShowRemoveModal={ setShowRemoveModal } removeCourse={ removeCourse }></RemoveCourseModal>
                </span>
            </Tab>
        </div>

    );
}

export default App;
