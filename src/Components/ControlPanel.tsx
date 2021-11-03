import React from "react";
import { Col } from "react-bootstrap";
import "../css/editButton.css";

// https://github.com/UD-CISC275-F21/ta-trainer/blob/main/src/components/ControlPanel.tsx
export function ControlPanel({showEditModal}: {showEditModal: (b:boolean)=>void}): JSX.Element {
    
    function editCourseModal() {
        showEditModal(true);
    }
    
    return (
        <Col>
            <button className="editButton" onClick={ editCourseModal }>Edit Course</button>
        </Col>
    );
}