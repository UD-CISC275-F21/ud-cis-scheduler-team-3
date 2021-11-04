import React from "react";
import { FallTable } from "./Components/Fall-Semester";
import { SpringTable } from "./Components/Spring-Semester";
import "./css/App.css";
import Tab from "./Components/Tab";

function App (): JSX.Element {
    return (
        <Tab>
            <span title="Welcome">
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
            </span>
            <span title="Instructions">

            </span>
            <span title="Course Selector">
                <FallTable disabled={false}></FallTable>
                <SpringTable disabled={false}></SpringTable>
            </span>
        </Tab>
    );
}

export default App;



