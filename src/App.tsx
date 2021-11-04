import React, {useState} from "react";
import { Course as CourseIF } from "./Components/Fall-Semester";
import Tabs from "./Components/Tab";
import { EditCourse } from "./Components/EditCourse";
import COURSES from "./Assets/Courses.json";
import Tab from "./Components/Tab";
import { Carousel } from "./Components/NextPrev";

function App(): JSX.Element { // jsx.element = very important return type, function has to return jsx.element
    const [semester, setSemester] = useState<CourseIF[]>(COURSES);
    const [visible, setVisible] = useState<boolean>(false);
    
    function editCourse(c: CourseIF): void {
        setSemester([...semester, c]); // fix this line later
    }
    
    return (
            <><Tab>
            <span title="Welcome and navigating our site">
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
            </span>
            <span title="Course selector">
                <Carousel showEditModal={setVisible}></Carousel>
            </span>
        </Tab><EditCourse visible={visible} setVisible={setVisible} editCourse={editCourse} semester={semester} setSemester={setSemester}></EditCourse></>

    );
}

export default App;



