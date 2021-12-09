import React, { useState } from "react";
import { MeetTheTeam } from "../MeetTheTeam";
import { FeedbackModal } from "../Modals/User Issue Modals/FeedbackModal";
import { ReportModal } from "../Modals/User Issue Modals/ReportModal";
import { ContactUsCards } from "./ContactUsCards";

export function ContactUs(): JSX.Element {
    const [issueTitle, setIssueTitle] = useState<string>("");
    const [showReportModal, setShowReportModal] = useState<boolean>(false);
    const [showFeedbackModal, setShowFeedbackModal] = useState<boolean>(false);
    
    return (
        <div>
            <ContactUsCards
                setShowReportModal={ setShowReportModal } setShowFeedbackModal={ setShowFeedbackModal }
            ></ContactUsCards>
            <ReportModal 
                issueTitle={ issueTitle } setIssueTitle={ setIssueTitle } 
                showReportModal={ showReportModal } setShowReportModal={ setShowReportModal }
            ></ReportModal>
            <FeedbackModal 
                issueTitle={ issueTitle } setIssueTitle={ setIssueTitle }
                showFeedbackModal={ showFeedbackModal } setShowFeedbackModal={ setShowFeedbackModal }
            ></FeedbackModal>
            <MeetTheTeam/>
        </div>
    );
}