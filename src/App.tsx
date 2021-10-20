import React from "react";
import { Course } from "./Components/Courses";
//import { Header } from "./Components/Table-Header";
import "./App.css";

// import bootstrap


function App(): JSX.Element {
    return (
        <div className="App">

            <h1>
                Welcome! 
                <p>
                With this site you will be able to keep track of your credits to
                            make sure that you graduate on time. You will be able to determine
                            how many credits you have, how many credits you need, etc.
                    
                                Follow these steps:
                </p>
            </h1>
    
            <header>
                UD CIS Scheduler

                <p>Authors: Ren Ross, Abel Juarez, and Ahilyn Dipre</p>
            </header>

        </div>
    );
}

export default App; 