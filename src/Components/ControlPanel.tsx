import React, { useState } from "react";
import { ToggleButton } from "react-bootstrap";
import { Course as CourseIF } from "./SemesterTable";

// https://github.com/UD-CISC275-F21/ta-trainer/blob/main/src/components/ControlPanel.tsx
export function ControlPanel({course}: {course: CourseIF}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    /*
    function editCourseModal() {
        showEditModal(true);
    }
    */
    return (
        <div>
            <ToggleButton 
                variant="secondary" 
                id={ `toggle-editing-${ course.code }` }
                checked={ editing } 
                value="1" 
                onChange={ (event)=>setEditing(event?.currentTarget.checked) } 
            >Edit</ToggleButton>
        </div>
    );
}