import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Exam from "../Exam";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Exam page", () => {
  const MockRouter = () => {
    const history = createMemoryHistory();
    history.push("/exam", { name: "shakil", gender: "male", exam: "html" });
    return (
      <Router history={history}>
        <Exam />
      </Router>
    );
  };
  test("render Exam page", () => {
    render(<MockRouter />);
    const ExamPage = screen.getByTestId("exam");
    expect(ExamPage).toBeInTheDocument();
  });

  test("render user Exam Question", () => {
    render(<MockRouter />);
    const question = screen.getByTestId("ques");
    expect(question).toHaveTextContent(/What is Html?/i);
  });

  test("Click and number and change question", () => {
    render(<MockRouter/>)
    const questionNumber = screen.getAllByTestId("quesNum");
    const questionElement = screen.getByTestId("ques");
    fireEvent.click(questionNumber[4])
    expect(questionElement).toHaveTextContent(/Html Revolation?/i);
  });
  
});
