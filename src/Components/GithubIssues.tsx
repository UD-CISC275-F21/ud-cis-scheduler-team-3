import React from "react";
import { Octokit } from "@octokit/rest"; 
import { REPO } from "../../config"; 

export async function GithubIssue(): Promise<JSX.Element> {
    const octokit = new Octokit;
    //const client = new GitHubClient();
    
    octokit.rest.issues.create({
        owner: REPO.owner,
        repo: REPO.project,
        title: "issue title",
        labels: ["user feedback"],
        body: "issue desc"
    });

    //const basicAuth = new Credentials(USER_AUTH.username, USER_AUTH.passowrd);
    //client.Credentials = basicAuth;

    
    return <div></div>;
}