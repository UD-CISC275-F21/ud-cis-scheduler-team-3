import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Course } from "../Interfaces/Course";
import { Semester } from "../Interfaces/Semester";
import { ControlPanel } from "./ControlPanel";
import { defaultSemesters } from "./Semesters/DefaultSemesters";
import { SemesterTable } from "./Semesters/SemesterTable";
import { AddSemesterModal } from "./Modals/AddSemesterModal";
import { RemoveSemesterModal } from "./Modals/RemoveSemesterModal";
import { AddCourseModal } from "./Modals/AddCourseModal";
import { RemoveCourseModal } from "./Modals/RemoveCourseModal";
import { GetStartedModal } from "./Modals/GetStartedModal";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DropBox } from "./DragDrop/DropBox";


export function CourseScheduler(): JSX.Element {
    const [semesterList, setSemesterList] = useState(defaultSemesters);
    const [currentSemester, setCurrentSemester] = useState<Semester>(semesterList[0]);
    const [editing, setEditing] = useState<boolean>(false);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const [showRemoveModal, setShowRemoveModal] = useState<boolean>(false);
    const [showAddSemesterModal, setShowAddSemesterModal] = useState<boolean>(false);
    const [showRemoveSemesterModal, setRemoveSemesterModal] = useState<boolean>(false);
    const [showGetStartedModal, setShowGetStartedModal] = useState<boolean>(false);

    function hardReset() {
        setSemesterList(defaultSemesters);
        setCurrentSemester({title: defaultSemesters[0].title, courses: defaultSemesters[0].courses});
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
    
    return <div>
        <DndProvider backend={HTML5Backend}>
            <DropBox />
        </DndProvider>
        <div className="CenterText">
            <DropdownButton id="dropdown-basic-button" title="Semesters" className="mt-5">
                {semesterList.map(semi => {
                    return (
                        <Dropdown.Item onClick={() => setCurrentSemester(semi)} key={semi.title}>{semi.title}</Dropdown.Item>
                    );
                })}
            </DropdownButton></div>
        <div className="CenterText">
            <RemoveSemesterModal 
                removeSemester={removeSemester} showRemoveSemesterModal={showRemoveSemesterModal} 
                setRemoveSemesterModal={setRemoveSemesterModal}/>
            <GetStartedModal 
                showGetStartedModal={showGetStartedModal} 
                setShowGetStartedModal={setShowGetStartedModal}/>
            <AddSemesterModal 
                addSemester={addSemester} showAddSemesterModal={showAddSemesterModal} 
                setShowAddSemesterModal={setShowAddSemesterModal}/></div>
        <SemesterTable 
            editing={editing} setEditing={setEditing} 
            currentSemester={currentSemester} setCurrentSemester={setCurrentSemester}></SemesterTable>
        <ControlPanel 
            setShowAddModal={ setShowAddModal } setShowRemoveModal={ setShowRemoveModal } 
            setEditing={ setEditing } clearSemester={ clearSemester } 
            removeSemester={ removeSemester } 
            hardReset={ hardReset }
            currentSemester={ currentSemester } setCurrentSemester={ setCurrentSemester }
            semesterList={ semesterList } setSemesterList={ setSemesterList }></ControlPanel>
        <AddCourseModal 
            showAddModal={ showAddModal } setShowAddModal={ setShowAddModal } 
            addCourse={ addCourse }></AddCourseModal>
        <RemoveCourseModal 
            showRemoveModal={ showRemoveModal } setShowRemoveModal={ setShowRemoveModal } 
            removeCourse={ removeCourse } 
            currentSemester= { currentSemester }></RemoveCourseModal>
    </div>;
}