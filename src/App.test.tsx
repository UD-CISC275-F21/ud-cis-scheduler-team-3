import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";



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

