import React from "react";
import "../../css/CenterElement.css";


export function WelcomeMessage(): JSX.Element {
    return (
        <div><div>
            <h1 className="CenterTitle">Welcome to Team 3&#39;s UD CIS Scheduler!</h1>

            <p className="CenterText">
                Our goal is to help CISC students plan out their semesters
                by providing templates of potential Fall/Spring semesters,
                and even Winter and Summer!</p>

            <p className="CenterText">
                This website will serve as a way for students to keep track of the
                classes they have taken and which ones they need to take next.</p>

            <p className="CenterText">
                Students will get the option to remove a semester
                if they are not pleased with their schedule</p>

            <p className="CenterText">
                Students will be able to edit in classes in case
                our default schedules dont match theirs</p>

            <p className="CenterText">
                Recommended 4 Year Path To Graduate on Time:
                <a href="https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf"
                >Suggested Plan</a></p>
        </div></div>
    );
}

