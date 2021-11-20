import "./css/App.css";
import React from "react";
import { Footer, Header } from "./Components/WebsiteText";

function App(): JSX.Element { // jsx.element = very important return type, function has to return jsx.element

    return <div>
        <Header></Header>
        <Footer></Footer>
    </div>;
}

export default App;
