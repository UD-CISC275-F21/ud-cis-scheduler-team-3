//import React, { useState } from "react";
//import { Form, Modal } from "react-bootstrap";
import "./css/editButton.css";

export function editCourse(): void {
    // what course are they editing
    const courseEdit = prompt("Please enter the Course Code. (ex: CISC 108)"); 
    console.log(courseEdit);
    let courseAspectEdit = prompt("What part of " + courseEdit + " would you like to edit? (ex: Code)"); 
    console.log(courseAspectEdit);
    courseAspectEdit = prompt("Please enter the new " + courseAspectEdit + " for " + courseEdit + "."); 
    console.log(courseAspectEdit);

    /*hooks to update course elements
    const [code, setCode] = useState<string>();        
    const [title, setTitle] = useState<string>();
    const [credits, setCredits] = useState<string>();
    const [description, setDescription] = useState<string>();
    */
    //return();
}
