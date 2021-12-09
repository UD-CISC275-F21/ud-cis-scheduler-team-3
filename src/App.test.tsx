import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { CourseScheduler } from "./Components/CourseScheduler";
import { MeetTheTeam } from "./Components/MeetTheTeam";
import { WelcomeMessage } from "./Components/WelcomeMessage";


test("renders UD CIS Scheduler text", () => {
    render(<WelcomeMessage />);
    const linkElement = screen.getByText(/Welcome to Team 3's UD CIS Scheduler!/i);
    expect(linkElement).toBeInTheDocument();
});

test("Goal is clear and visible", () => {
    render(<WelcomeMessage />);
    const linkElement = screen.getByText(/help CISC students plan out their semesters/i);
    expect(linkElement).toBeInTheDocument();
});


test("link for UD Comp. Sci. plan is provided", () => {
    render(<WelcomeMessage />);
    window.open = jest.fn();
    // source: https://stackoverflow.com/a/66147542
    const plan_link = screen.getByRole("link", {name: "plan-link"});
    expect(plan_link).toHaveAttribute("href", 
        "https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf");
    expect(plan_link).toHaveAttribute("target", "_blank");
});

test("Meet The Team text and images display", () => {
    render(<MeetTheTeam />);

    // text
    expect(screen.getByText("Meet The Team!")).toBeInTheDocument();
    expect(screen.getByText("Ahilyn Dipre")).toBeInTheDocument();
    expect(screen.getByText("Abel Juarez")).toBeInTheDocument();
    expect(screen.getByText("Ren Ross")).toBeInTheDocument();
    
    // images
    expect(screen.getByAltText("Ahilyn Dipre GitHub Profile Picture")).toBeInTheDocument();
    expect(screen.getByAltText("Abel Juarez GitHub Profile Picture")).toBeInTheDocument();
    expect(screen.getByAltText("Ren Ross GitHub Profile Picture")).toBeInTheDocument();  
});

test("Meet The Team buttons open links", () => {
    render(<MeetTheTeam />);

    // get buttons
    const AD_Button = screen.getByRole("button", {name: "AD-Button"});
    const AJ_Button = screen.getByRole("button", {name: "AJ-Button"});
    const RR_Button = screen.getByRole("button", {name: "RR-Button"});
    
    const Team_Buttons = [AD_Button, AJ_Button, RR_Button];
    
    for (let i = 0; i < Team_Buttons.length; i++) {
        expect(Team_Buttons[i]).toBeDefined;
    }
    
    // button clicks open links
    window.open = jest.fn();

    for (let i = 0; i < Team_Buttons.length; i++) {
        userEvent.click(Team_Buttons[i]);
        expect(window.open).toHaveBeenCalled();
    }
});

it("users can click button to get rid of courses", async () => {
    const removeCode = screen.getByTestId;
    expect(removeCode).toBeInTheDocument;
});

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

test("Getting Started", () => {
    render(<CourseScheduler />);
    const getStartedButton = screen.getByRole("button", {name: "Getting Started"});
    userEvent.click(getStartedButton);
    const getStartedClose = screen.getByRole("button", {name: "Close"});
    userEvent.click(getStartedClose); 
});

test("Getting Started Link", async () => {
    render(<CourseScheduler />);
    const getStartedButton = screen.getByRole("button", {name: "Getting Started"});
    userEvent.click(getStartedButton);
    const getStartedText = await screen.findByText("Default Computer Science B.S plan");
    userEvent.click(getStartedText); 
});
 

// Still need to add a semester to choose
test("Add Semester", () => {
    render(<CourseScheduler />);
    const addSemesterButton = screen.getByRole("button", {name: "+"});
    userEvent.click(addSemesterButton);
    const addSemester = screen.getByRole("button", {name: "Add Semester"});
    userEvent.click(addSemester);
});

test("Add Semester Close Button", () => {
    render(<CourseScheduler />);
    const addSemesterButton = screen.getByRole("button", {name: "+"});
    userEvent.click(addSemesterButton);
    const addSemester = screen.getByRole("button", {name: "Add Semester"});
    userEvent.click(addSemester);
});

test("Add Semester Cancel Button", () => {
    render(<CourseScheduler />);
    const addSemesterButton = screen.getByRole("button", {name: "+"});
    userEvent.click(addSemesterButton);
    const addSemesterCancelButton = screen.getByRole("button", {name: "Cancel"});
    userEvent.click(addSemesterCancelButton); 
});

test("Delete Semester", () => {
    render(<CourseScheduler />);
    const deleteSemesterButton = screen.getByRole("button", {name: "-"});
    userEvent.click(deleteSemesterButton);
    const deleteSemester = screen.getByRole("button", {name: "Delete Semester"});
    userEvent.click(deleteSemester);
});

test("Delete Semester Close Button", () => {
    render(<CourseScheduler />);
    const deleteSemesterButton = screen.getByRole("button", {name: "-"});
    userEvent.click(deleteSemesterButton);
    const deleteSemesterCloseButton = screen.getByRole("button", {name: "Close"});
    userEvent.click(deleteSemesterCloseButton);
});

test("Delete Semester Cancel Button", () => {
    render(<CourseScheduler />);
    const deleteSemesterButton = screen.getByRole("button", {name: "-"});
    userEvent.click(deleteSemesterButton);
    const deleteSemesterCancelButton = screen.getByRole("button", {name: "Cancel"});
    userEvent.click(deleteSemesterCancelButton);
});

test("Reset when Semeseter is Added", () => {
    render(<CourseScheduler />);
    const addSemesterButton = screen.getByRole("button", {name: "+"});
    userEvent.click(addSemesterButton);
    const addSemester = screen.getByRole("button", {name: "Add Semester"});
    userEvent.click(addSemester);
    const reset = screen.getByRole("button", {name: "reset"});
    userEvent.click(reset);
});

test("Reset when Semeseter is Deleted", () => {
    render(<CourseScheduler />);
    const deleteSemesterButton = screen.getByRole("button", {name: "-"});
    userEvent.click(deleteSemesterButton);
    const deleteSemester = screen.getByRole("button", {name: "Delete Semester"});
    userEvent.click(deleteSemester);
    const reset = screen.getByRole("button", {name: "reset"});
    userEvent.click(reset);
});

test("Reset when Semeseter is Cleared", () => {
    render(<CourseScheduler />);
    const clearCoursesButton = screen.getByRole("button", {name: "clear"});
    userEvent.click(clearCoursesButton);
    const reset = screen.getByRole("button", {name: "reset"});
    userEvent.click(reset);
}); 

test("Clear All Semester Clears All Semesters", () => {
    render(<CourseScheduler />);
    const clearAllSemesters = screen.getByRole("button", {name: "clear all semesters"});
    userEvent.click(clearAllSemesters);
    const reset = screen.getByRole("button", {name: "reset"});
    userEvent.click(reset);
});

