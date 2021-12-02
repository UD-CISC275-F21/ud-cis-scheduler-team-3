import React from "react";
import { Alert } from "react-bootstrap";
import "../css/CenterElement.css";
import "../css/Team.css";
import AJ_pic  from "../Images/Team/abeljuarez.png";
import AD_pic  from "../Images/Team/ahilyndipre.png";
import RR_pic  from "../Images/Team/renross.png";

export function MeetTheTeam(): JSX.Element {
    return <div>
        <Alert variant="light" style={{position: "fixed", bottom: "0", left: "0", right: "0"}}><hr/>
            <h5 className="CenterText">Meet The Team!</h5><hr/>
            <div className="CenterText">
                <div 
                    className="Team" 
                    onClick={() => window.open("https://github.com/ahilynd", "_blank")}>
                    <img className="TeamImage" alt="Ahilyn Dipre GitHub Profile Picture" src={ AD_pic }></img>
                    Ahilyn Dipre</div>
                <div 
                    className="Team" 
                    onClick={()=> window.open("https://github.com/TheMexicanChico", "_blank")}>
                    <img className="TeamImage" alt="Abel Juarez GitHub Profile Picture" src={ AJ_pic }></img>
                    Abel Juarez</div>
                <div 
                    className="Team" 
                    onClick={()=> window.open("https://github.com/renross", "_blank")}>
                    <img className="TeamImage" alt="Ren Ross GitHub Profile Picture" src={ RR_pic }></img>
                    Ren Ross</div>
            </div>
        </Alert>
    </div>;
}
