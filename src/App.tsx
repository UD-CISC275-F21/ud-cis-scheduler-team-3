import React from "react";
import "./css/App.css";
import { MeetTheTeam }  from "./Components/MeetTheTeam";
import { NavBar } from "./Components/NavBar";

function App(): JSX.Element { // jsx.element = very important return type, function has to return jsx.element

    return <div>
        <NavBar></NavBar>
        <MeetTheTeam></MeetTheTeam>
    </div>;
}

export default App;
