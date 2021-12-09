import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export function ReportModal({issueTitle, setIssueTitle, showReportModal, setShowReportModal}: 
    {issueTitle: string, setIssueTitle: (s:string)=>void, showReportModal: boolean, setShowReportModal: (b:boolean)=>void}): JSX.Element {
    
    const hideReportModal = () => setShowReportModal(false);

    return (
        <Modal show={ showReportModal } onHide={ hideReportModal }>
            <Modal.Header closeButton>
                <Modal.Title>Report Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3' id='userReport'>
                        <Form.Control as="textarea" placeholder={ "What's the problem?" } rows={5}
                            value={ issueTitle } onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => setIssueTitle(ev.target.value)} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={() => setShowReportModal(false)}>Cancel</Button>
                <Button variant="warning" onClick={()=>console.log("submit")}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}