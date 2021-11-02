import React from "react";
import { Carousel } from "./Components/NextPrev";
import "./css/App.css";
import Tabs from "./Components/tabs/Tabs";
import Tab from "./Components/tabs/Tab";
import "./css/editButton.css";
import { editCourse } from "./editCourse";

function App (): JSX.Element { //jsx.element is very important return type , function has to return jsx.element
    return (
        <><Tabs>
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
                <button className="editButton" onClick = { editCourse }>Edit Course</button>
                <Carousel></Carousel>
            </Tab>
        </Tabs>
          
        </>
    );
}
  


export default App; 