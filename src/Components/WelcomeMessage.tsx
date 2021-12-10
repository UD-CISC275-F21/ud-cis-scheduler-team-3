import React from "react";
import "../css/CenterElement.css";
import { MeetTheTeam } from "./MeetTheTeam";


export function WelcomeMessage(): JSX.Element {
    return (
        <div><div>
            <h1 className="CenterTitle">Welcome to Team 3&#39;s UD CIS Scheduler!</h1>

            <p className="CenterText">
                Our goal is to help CISC students plan out their semesters by providing </p>
            <p className="CenterText">
                templates of potential Fall/Spring semesters, and even Winter and Summer!</p><br/>
            <p className="CenterText">
                This website will serve as a way for students to keep track of the </p>
            <p className="CenterText">
                classes they have taken and which ones they need to take next,</p>
            <p className="CenterText">
                including prerequisites, electives, and other general degree requirements.</p><br/>
            <p className="CenterText">
                Students will have the option to add or remove a semester to customize 
                their plan, and the </p>
            <p className="CenterText">
                ability to add or remove specific courses  
                (as well as edit current ones) to perfectly fit their needs.</p><br/>
            <b className="CenterText">
                <a href="https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf" 
                    target="_blank" rel="noreferrer" aria-label="plan-link"
                >Recommended Four Year Path To Graduate on Time</a></b>
        </div>
        <MeetTheTeam></MeetTheTeam></div>
    );
}

