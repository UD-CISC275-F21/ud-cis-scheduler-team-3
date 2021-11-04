import React from "react";
import { FallTable } from "./Components/Fall-Semester";
import { SpringTable } from "./Components/Spring-Semester";
import "./css/App.css";
import Tab from "./Components/Tab";


// import bootstrap


/*function App (): JSX.Element {
    //jsx.element is very important return type , function has to return jsx.element
    return (
        <><Tab>
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
        </Tab><Tab title="Course selector">
                <FallTable></FallTable>

                <SpringTable></SpringTable>

            </Tab></>
  
    );
}
  


export default App; 
*/
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
                <FallTable></FallTable>
                <SpringTable></SpringTable>
            </span>
        </Tab>
    );
}

export default App;


/*import React from "react";
import Tab from "./Components/Tab";

const App= () => {
    return (
        <Tab>
            <span title="Lemon">Lemon is yellow</span>
            <span title="Strawberry">Strawberry is red</span>
            <span title="spanear">spanear is green</span>
        </Tab>
    );
};

export default App;
*/


