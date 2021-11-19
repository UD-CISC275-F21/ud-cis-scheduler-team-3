import React from "react";
import { render, screen, getByRole } from "@testing-library/react";
import App from "./App";
import PopUp from "./Components/PopUpInstructions";
import TabTitle from "./Components/Tabs/TabTitle";



test("renders UD CIS Scheduler text", () => {
    render(<App />);
    const linkElement = screen.getByText(/UD CIS Scheduler/i);
    expect(linkElement).toBeInTheDocument();
});

test("Name of site creators", () => {
    render(<App />);
    const linkElement = screen.getByText(/Created by: Ren Ross, Abel Juarez and Ahilyn Dipre/i);
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

test("Tabs are visible", () => {
    render(<App />);

    const Tab = screen.getByTestId;
    expect(Tab).toBeInTheDocument;
});

it("users can click button to get rid of courses", async () => {
    const removeCode = screen.getByTestId;
    expect(removeCode).toBeInTheDocument;
});

    const Tab = screen.getByTestId
    expect(Tab).toBeInTheDocument
});

it("users can click button to get rid of courses", async () => {
    const removeCourse = screen.getByTestId
    const removeCode = screen.getByTestId
    expect(removeCode).toBeInTheDocument
})


test("all PopUpInstructions Props are getting used", () => {
    render(<PopUp content="Hello World" handleClose={() => null}/>);
});

test("properties of TabTitle are being used", () => {

    render(<TabTitle title="Name of tab" index={0} setSelectedTab={() => null} selectedTab={0}/>);
});

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

    render(<TabTitle title="Name of tab" index={0} setSelectedTab={() => null} selectedTab={0}/>)
})

test("hardReset is visible", () => {
    render(<App />);
    const hardReset = screen.getByTestId
    expect(hardReset).toBeInTheDocument
})

test("hardLoad loads after changes", () => {
    render(<App />);
    const hardLoad = screen.getByTestId
    expect(hardLoad).toBeInTheDocument 
})

