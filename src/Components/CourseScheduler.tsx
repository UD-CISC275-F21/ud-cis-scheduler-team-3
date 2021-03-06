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
import { emptySemester } from "./Semesters/EmptySemester";

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
        handleEmptySemester();
    }
    
    function clearSingleSemester() {
        setCurrentSemester({title: "---", courses: []});
        handleEmptySemester();
    }
    
    function clearAllSemesters(){
        setSemesterList([]);
        clearSingleSemester();
        handleEmptySemester();
    }

    function handleEmptySemester() {
        setCurrentSemester({title: emptySemester[0].title, courses: [...emptySemester[0].courses]});
    }

    function addCourse(newCourse: Course): void {
        setCurrentSemester({title: currentSemester.title, courses: [...currentSemester.courses, newCourse]});
    }

    function removeCourse(removeCode: string): void {
        setCurrentSemester({title: currentSemester.title, courses: currentSemester.courses.filter(course => course.code != removeCode)});
    }
     
    return <div>
        <div className="CenterText">
            <GetStartedModal 
                showGetStartedModal={showGetStartedModal} 
                setShowGetStartedModal={setShowGetStartedModal}/>
        </div>
        <div className="CenterText">
            <RemoveSemesterModal 
                removeSemester={removeSemester} showRemoveSemesterModal={showRemoveSemesterModal} 
                setRemoveSemesterModal={setRemoveSemesterModal}/>
            <DropdownButton id="dropdown-basic-button" title="Semesters" className="mt-3">
                {semesterList.map(semi => {
                    return (
                        <Dropdown.Item onClick={() => setCurrentSemester(semi)} key={semi.title}>{semi.title}</Dropdown.Item>
                    );
                })}
            </DropdownButton>
            <AddSemesterModal 
                addSemester={addSemester} showAddSemesterModal={showAddSemesterModal} 
                setShowAddSemesterModal={setShowAddSemesterModal}/></div>
        <SemesterTable 
            editing={editing} setEditing={setEditing} 
            currentSemester={currentSemester} setCurrentSemester={setCurrentSemester}></SemesterTable>
        <ControlPanel 
            setShowAddModal={ setShowAddModal } setShowRemoveModal={ setShowRemoveModal } 
            setEditing={ setEditing } clearSingleSemester={ clearSingleSemester } clearAllSemesters={ clearAllSemesters }
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