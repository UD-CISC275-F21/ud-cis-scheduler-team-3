import { Octokit } from "@octokit/rest";
import { REPO_AUTH as REPO, OCTOKIT_AUTH as OCTO } from "../../Assets/config"; 

export async function ReportProblem(): Promise<void> {
    
    const octokit = new Octokit({
        auth: OCTO.auth,
        userAgent: OCTO.userAgent
    });
    
    const newIssue = await octokit.issues.create({
        owner: REPO.owner,
        repo: REPO.project,
        title: "",
        labels: ["user-reported-bug", "bug"],
    });

    if (newIssue) {
        return console.log(`Here's the issue: <${newIssue.data.html_url}>`);
    } else {
        return console.log("Back to the drawing board...");
    }

}