import React from "react";
import "./css/App.css";
import { NavBar } from "./Components/NavBar";

function App(): JSX.Element { // jsx.element = very important return type, function has to return jsx.element

    return <div>
        <NavBar></NavBar>
    </div>;
}

export default App;