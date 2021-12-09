import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export function FeedbackModal({issueTitle, setIssueTitle, userIssue, showFeedbackModal, setShowFeedbackModal}: 
    {issueTitle: string, setIssueTitle: (s:string)=>void, userIssue: (s1:string, s2:string)=>void, showFeedbackModal: boolean, setShowFeedbackModal: (b:boolean)=>void}): JSX.Element {
    
    const hideFeedbackModal = () => setShowFeedbackModal(false);
    
    return (
        <Modal show={ showFeedbackModal } onHide={ hideFeedbackModal }>
            <Modal.Header closeButton>
                <Modal.Title>Feedback Form</Modal.Title>
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
                <Button variant="outline-danger" onClick={() => setShowFeedbackModal(false)}>Cancel</Button>
                <Button variant="warning" onClick={ ()=>userIssue("user-feedback", issueTitle) }>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}