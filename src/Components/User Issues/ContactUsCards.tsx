import React from "react";
import { Button, Card, Container, Row} from "react-bootstrap";
import "../../css/Card.css";
 
export function ContactUsCards({setShowReportModal, setShowFeedbackModal}: 
    {setShowReportModal: (b:boolean)=>void, setShowFeedbackModal: (b:boolean)=>void}): JSX.Element {

    return <Container><Row>
        <Card className="Card" style={{ width: "22rem" }}>
            <Card.Body>
                <Card.Header as="h5">Report A Problem</Card.Header>
                <Card.Text>
                    <br/>Find a bug in our system?<br/>Did something catch on fire?<br/>
                    Has the apocolypse started and crashed our website, 
                    but you still need to submit your plan to your advisor?<br/>
                    Report the problem directly to our team by clicking the button below!<br/>
                </Card.Text>
                <Button 
                    variant="outline-secondary"
                    onClick={ ()=>setShowReportModal(true) }
                >Access Report Form</Button>
            </Card.Body>
        </Card>
        <Card className="Card" style={{ width: "22rem" }}>
            <Card.Body>
                <Card.Header as="h5">Give Us Feedback</Card.Header>
                <Card.Text>
                    <br/>Are we missing a feature that you want?<br/>
                    Is there something you think could improve our website?<br/>
                    Are we missing accessibility accomodations?<br/>
                    Let our team know by clicking the button below!<br/>
                </Card.Text>
                <Button 
                    variant="outline-secondary"
                    onClick={ ()=>setShowFeedbackModal(true) }
                >Access Feedback Form</Button>
            </Card.Body>
        </Card>
    </Row></Container>;
}

