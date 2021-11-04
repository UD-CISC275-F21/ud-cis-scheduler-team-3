import React from "react";
import { ToggleButton } from "react-bootstrap";

// https://github.com/UD-CISC275-F21/ta-trainer/blob/main/src/components/ControlPanel.tsx
export function ControlPanel({showEditModal}: {showEditModal: (b:boolean)=>void}): JSX.Element {
    
    function editCourseModal() {
        showEditModal(true);
    }
    
    return (
        <div>
            <ToggleButton variant="secondary" value="1" onClick={ editCourseModal }>Edit</ToggleButton>
        </div>
    );
}