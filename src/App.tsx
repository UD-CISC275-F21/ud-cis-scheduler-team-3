import React from "react";
import logo from "./logo.svg";
import "./App.css";

// Take three baby

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                UD CIS Scheduler
                <p>
                    Authors: Ren Ross, Abel Juarez, and Ahilyn Dipre
                </p>
            </header>
        </div>
    );
}

export default App;
