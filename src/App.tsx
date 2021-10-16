import React from "react";
import "./App.css";
import Home from "./tabs/home";
import TestDummy from "./tabs/testingdummy";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 

// Take three baby

/*function App(): JSX.Element {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/home' exact component={Home} />
                </Switch>
            </Router>
            <header className="App-header">
                    UD CIS Scheduler
                <p>
                    Authors: Ren Ross, Abel Juarez, and Ahilyn Dipre
                </p>
            </header>
            
        </div>
    );
}
*/
function App(): JSX.Element {
    return (
        <div className="App">
            <Router>
                <header>
                UD CIS Scheduler
                </header>
                <Navbar />
                <Switch>
                    <Route path='/home' exact component={Home} />
                    <Route path='/testingdummy' exact component={TestDummy} />
                </Switch>
            </Router>
            
            
        </div>
    );
}

export default App;