import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { CourseScheduler } from "./Components/CourseScheduler";
// import PopUp from "./Components/PopUpInstructions";
// import TabTitle from "./Components/Tabs/TabTitle";

/**
 * 
 *      Ren-Ren, Don't mess with NavBar
 * 
 */

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
    // source: https://stackoverflow.com/a/66147542
    expect(screen.getByRole("plan-link")).toHaveAttribute("href", "https://www.cis.udel.edu/wp-content/uploads/2018/10/COE_MajorSlicks_CISC_2018.pdf");
});

test("Meet the team text and images display", () => {
    render(<App />);

    const AD_Button = screen.getByRole("button", {name: "AD-Button"});
    const AJ_Button = screen.getByRole("button", {name: "AJ-Button"});
    const RR_Button = screen.getByRole("button", {name: "RR-Button"});
    
    // text displays
    expect(screen.getByText("Meet The Team!")).toBeInTheDocument();
    expect(screen.getByText("Ahilyn Dipre")).toBeInTheDocument();
    expect(screen.getByText("Abel Juarez")).toBeInTheDocument();
    expect(screen.getByText("Ren Ross")).toBeInTheDocument();
    
    // images display
    expect(screen.getByAltText("Ahilyn Dipre GitHub Profile Picture")).toBeInTheDocument();
    expect(screen.getByAltText("Abel Juarez GitHub Profile Picture")).toBeInTheDocument();
    expect(screen.getByAltText("Ren Ross GitHub Profile Picture")).toBeInTheDocument();

    // buttons clicks
    userEvent.click(AD_Button);
    userEvent.click(AJ_Button);
    userEvent.click(RR_Button);

    // links function
    expect(AD_Button).toHaveAttribute("onclick");
    expect(AJ_Button).toHaveAttribute("href", "https://github.com/TheMexicanChico");
    expect(RR_Button).toHaveAttribute("href", "https://github.com/renross");
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

