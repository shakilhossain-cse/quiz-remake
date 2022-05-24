import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../Home";
import userEvent from "@testing-library/user-event";

describe("Home page", () => {
  
  test("render home page ", () => {
    render(<Home />);
    const homeElement = screen.getByTestId("home");
    expect(homeElement).toBeInTheDocument();
  });

  test("render intial feildss", () => {
    render(<Home />);
    const nameFeild = screen.getByTestId("name") as HTMLInputElement;
    const genderFeild = screen.getByTestId("gender") as HTMLSelectElement;
    const examFeild = screen.getByTestId("exam") as HTMLSelectElement;
    const button = screen.getByTestId("button");
    expect(nameFeild.value).toBe("");
    expect(genderFeild.value).toBe("male");
    expect(examFeild.value).toBe("html");
    expect(button).toBeDisabled();
  });

  test("change name feild", () => {
    render(<Home />);
    const text = "shakil";
    const nameFeild = screen.getByTestId("name") as HTMLInputElement;
    userEvent.type(nameFeild, text);
    expect(nameFeild.value).toBe(text);
  });

  test("change name feild and button will be enable", () => {
    render(<Home />);
    const text = "shakil";
    const nameFeild = screen.getByTestId("name") as HTMLInputElement;
    const button = screen.getByTestId("button");
    userEvent.type(nameFeild, text);
    expect(button).not.toBeDisabled();
  });

  test("change gender select feild ", () => {
    render(<Home />);
    const genderFeild = screen.getByTestId("gender") as HTMLSelectElement;
    fireEvent.change(genderFeild, {
      target: { value: "female" },
    });
    expect(genderFeild.value).toBe("female");
  });

  test("change exam select feild ", () => {
    render(<Home />);
    const examSelectFeild = screen.getByTestId("exam") as HTMLSelectElement;
    fireEvent.change(examSelectFeild, {
      target: { value: "css" },
    });
    expect(examSelectFeild.value).toBe("css");
  });

  test("click button and navigate anotier page", () => {
    render(<Home />);
    const Button = screen.getByTestId("button");
    fireEvent.click(Button);
    const ExamPage = screen.getByTestId("exam");
    expect(ExamPage).toBeInTheDocument();
  });

});
