import React, { useState } from "react";
import { Octokit } from "@octokit/rest";
import { RequestError } from "@octokit/types";
import { MeetTheTeam } from "../MeetTheTeam";
import { FeedbackModal } from "../Modals/User Issue Modals/FeedbackModal";
import { ReportModal } from "../Modals/User Issue Modals/ReportModal";
import { ContactUsCards } from "./ContactUsCards";
import { USER_ISSUES_TOKEN as TOKEN } from "../../Assets/config"; 

export function ContactUs(): JSX.Element {
    const [issueTitle, setIssueTitle] = useState<string>("");
    const [showReportModal, setShowReportModal] = useState<boolean>(false);
    const [showFeedbackModal, setShowFeedbackModal] = useState<boolean>(false);
    
    async function userIssue(issueType: string, issueTitle: string): Promise<void> {
        // the following line includes guidance from Josh Lyon
        const userToken = process.env.USER_ISSUES_TOKEN === "" ? TOKEN : process.env.USER_ISSUES_TOKEN;
        const issueLabels = issueType == "user-report" ? ["user-reported-bug", "bug"] : ["user-submitted-feedback", "enhancement"];
        
        const octokit = new Octokit({
            auth: userToken,
            userAgent: "anonymous user"
        });
        
        // source: https://github.com/ud-cis-discord/SageV2/blob/main/src/commands/admin/issue.ts#L19
        const newIssue = await octokit.issues.create({
            owner: "UD-CISC275-F21",
            repo: "ud-cis-scheduler-team-3",
            title: issueTitle,
            labels: issueLabels, 
        }).catch(response => {
            console.log(response);
            let errormsg = "";
            const { errors } = response as RequestError;
            errors ? errors.forEach(error => {
                errormsg += `Value ${error.code} for field ${error.field}.\n`;
            }) : errormsg += "No errors could be logged.";
            console.log(`Issue creation failed. (HTTP Error ${response.status}`);
        });
        
    
        if (newIssue) {
            console.log("Issue created successfully.");
        } else {
            console.log("Back to the drawing board...");
        }
    
    }

    return (
        <div>
            <ContactUsCards
                setShowReportModal={ setShowReportModal } setShowFeedbackModal={ setShowFeedbackModal }
            ></ContactUsCards>
            <ReportModal 
                issueTitle={ issueTitle } setIssueTitle={ setIssueTitle } userIssue = { userIssue }
                showReportModal={ showReportModal } setShowReportModal={ setShowReportModal }
            ></ReportModal>
            <FeedbackModal 
                issueTitle={ issueTitle } setIssueTitle={ setIssueTitle } userIssue = { userIssue }
                showFeedbackModal={ showFeedbackModal } setShowFeedbackModal={ setShowFeedbackModal }
            ></FeedbackModal>
            <MeetTheTeam/>
        </div>
    );
}