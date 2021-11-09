import "./css/App.css";
import React, {useState} from "react";
import { Course as CourseIF } from "./Components/SemesterTable";
import Tab from "./Components/Tab";
import { EditCourse } from "./Components/EditCourse";
import COURSES from "./Assets/Courses.json";
import { Semester, SemesterTable } from "./Components/SemesterTable";
import PopUp from "./Components/PopUpInstructions";

function App(): JSX.Element { // jsx.element = very important return type, function has to return jsx.element
    const [semester, setSemester] = useState<CourseIF[]>(COURSES);
    const [visible, setVisible] = useState<boolean>(false);
    const semesterList: Semester[] = [{
        courses: [COURSES[0],COURSES[1],COURSES[2],COURSES[3],COURSES[4]],
        title: "Freshman Fall Semester"
    },
    {
        courses: [],
        title: "Freshman Winter Semseter"
    },
    {    
        courses: [COURSES[5],COURSES[6],COURSES[7],COURSES[8],COURSES[9]],
        title: "Freshman Spring Semester"
    },
    {
        courses: [],
        title: "Freshman Summer Semseter"
    },
    {
        courses: [COURSES[10],COURSES[11],COURSES[12],COURSES[13],COURSES[14]],
        title: "Sophmore Fall Semester"
    },
    {
        courses: [],
        title: "Sophmore Winter Semseter"
    },
    {
        courses: [COURSES[15],COURSES[16],COURSES[17],COURSES[18],COURSES[19]],
        title: "Sophmore Spring Semester"
    },
    {
        courses: [],
        title: "Sophmore Summer Semseter"
    },
    {
        courses: [COURSES[20],COURSES[21],COURSES[22],COURSES[23],COURSES[24]],
        title: "Junior Fall Semester"
    },
    {
        courses: [],
        title: "Junior Winter Semseter"
    },
    {
        courses: [COURSES[25],COURSES[26],COURSES[27],COURSES[28],COURSES[29]],
        title: "Junior Spring Semester"
    },
    {
        courses: [],
        title: "Junior Summer Semseter"
    },
    {
        courses: [COURSES[30],COURSES[31],COURSES[32],COURSES[33],COURSES[34]],
        title: "Senior Fall Semester"
    },
    {
        courses: [],
        title: "Senior Winter Semseter"
    },
    {
        courses: [COURSES[35],COURSES[36],COURSES[37],COURSES[38],COURSES[39]],
        title: "Senior Spring Semester"
    },
    {
        courses: [],
        title: "Senior Summer Semseter"
    },
    ];

    const [addSemester, settingSemester] = useState<Semester>(semesterList[0]);
    
    function editCourse(c: CourseIF): void {
        setSemester([...semester, c]); // fix this line later
    }

    const [isOpen, setIsOpen] = useState(false);
    const togglePopUp = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div>
            <input type  = "button"
                value = "Click to View Instructions"
                onClick={togglePopUp}/> 
            <p> Step by Step Instructions 
                To Navigate Our Site </p>
            {isOpen}
            <Tab>
                <span title="Welcome">
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
                        by the <a href="https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf">4 Year Path</a>  
                        to graduate on time (by the University of Delaware). However, the 
                        tables can be manipulated in a way that can fit anyone’s academic needs.</p>
                    <SemesterTable currentSemester={addSemester} showEditModal={ setVisible }></SemesterTable>
                    <button onClick={() => settingSemester(semesterList[0])}>F (Fall)</button>
                    <button onClick={() => settingSemester(semesterList[1])}>F (Spring)</button>
                    <button onClick={() => settingSemester(semesterList[2])}>Sp (Fall)</button>
                    <button onClick={() => settingSemester(semesterList[3])}>Sp (Spring)</button>
                    <button onClick={() => settingSemester(semesterList[4])}>J (Fall)</button>
                    <button onClick={() => settingSemester(semesterList[5])}>J (Spring)</button>
                    <button onClick={() => settingSemester(semesterList[6])}>Se (Fall)</button>
                    <button onClick={() => settingSemester(semesterList[7])}>Se (Spring)</button>
                </span>
            </Tab>
            <EditCourse visible={visible} setVisible={setVisible} editCourse={editCourse} semester={semester} setSemester={setSemester}></EditCourse>
        </div>

    );
}

export default App;



