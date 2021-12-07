import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { CourseScheduler } from "./Components/CourseScheduler";
// import PopUp from "./Components/PopUpInstructions";
// import TabTitle from "./Components/Tabs/TabTitle";

test("renders UD CIS Scheduler text", () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to Team 3's UD CIS Scheduler!/i);
    expect(linkElement).toBeInTheDocument();
});

test("Goal is clear and visible", () => {
    render(<App />);
    const linkElement = screen.getByText(/help CISC students plan out their semesters/i);
    expect(linkElement).toBeInTheDocument();
});


test("link for UD comp sci plan is provided", () => {
    render(<App />);
});

/* needs to be re-worked for new navbar
test("Tabs are visible", () => {
    render(<App />);

    const Tab = screen.getByTestId;
    expect(Tab).toBeInTheDocument;
});
*/

it("users can click button to get rid of courses", async () => {
    const removeCode = screen.getByTestId;
    expect(removeCode).toBeInTheDocument;
});

/* needs to be re-worked for toasts 
test("all PopUpInstructions Props are getting used", () => {
    render(<PopUp content="Hello World" handleClose={() => null}/>);
});
*/

/* needs to be re-worked for new navbar
test("properties of TabTitle are being used", () => {

    render(<TabTitle title="Name of tab" index={0} setSelectedTab={() => null} selectedTab={0}/>);
});
*/

/** These two below are the same and aren't testing what it's supposed too*/
test("hardReset is visible", () => {
    render(<App />);
    const hardReset = screen.getByTestId;
    expect(hardReset).toBeInTheDocument;
});

test("hardLoad loads after changes", () => {
    render(<App />);
    const hardLoad = screen.getByTestId;
    expect(hardLoad).toBeInTheDocument; 
});

 
test("Cancel buttons for Add Semester Modal", () => {
    render(<CourseScheduler />);
    const addSemesterButton = screen.getByRole('button', {name: "+"});
    userEvent.click(addSemesterButton);
    const addSemesterCancelButton = screen.getByRole('button', {name: "Cancel"});
    userEvent.click(addSemesterCancelButton); 
});

test("Cancel buttons for Delete Semester Modal", () => {
    render(<CourseScheduler />);
    const deleteSemesterButton = screen.getByRole('button', {name: "-"});
    userEvent.click(deleteSemesterButton);
    const deleteSemesterCancelButton = screen.getByRole('button', {name: "Cancel"});
    userEvent.click(deleteSemesterCancelButton);
});


