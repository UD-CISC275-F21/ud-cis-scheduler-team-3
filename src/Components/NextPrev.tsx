import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { FallTable } from "./Fall-Semester";
import { SpringTable } from "./Spring-Semester";

export function Carousel({showEditModal}: {showEditModal: (b:boolean)=>void}): JSX.Element {

    const [currentSemester, setCurrentSemester] = useState(0);
    return (
        <div>
            <FallTable disabled={currentSemester !== 0 } showEditModal={ showEditModal }></FallTable>
            <SpringTable disabled={currentSemester !== 1} showEditModal={ showEditModal }></SpringTable>
            <Button onClick={() => setCurrentSemester(currentSemester - 1)} disabled={currentSemester == 0}>Prev</Button>
            <Button onClick={() => setCurrentSemester(currentSemester + 1)}>Next</Button>
        </div>
    );
    
}




/*
function Next () {
    const [currentSemester, setCurrentSemester] = useState(0);

    return (
        <div>
            <button onClick={() => setCurrentSemester(currentSemester + 1)}>Next</button>
        </div>
    )
}

function Prev () {
    const [currentSemester, setCurrentSemester] = useState(1);

    return (
        <div>
            <button onClick={() => setCurrentSemester(currentSemester + 1)}>Next</button>
        </div>
    )
}
*/
