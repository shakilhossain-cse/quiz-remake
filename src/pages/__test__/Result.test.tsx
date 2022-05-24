import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Exam, { IResult } from "../Exam";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Result from "../Result";
import getQuestion from "../../utils/getQuestion";
import { IQuestion } from "../../utils/question";

describe("Exam page", () => {
  const MockRouter = () => {
    const question: IQuestion[] = getQuestion("html");
    const result: IResult = { correct: 3, total: 5 };
    const history = createMemoryHistory();
    history.push("/result", { question, result });
    return (
      <Router history={history}>
        <Result />
      </Router>
    );
  };
  test("render Result page", () => {
    render(<MockRouter />);
    const resultPage = screen.getByTestId("result");
    expect(resultPage).toBeInTheDocument();
  });
  test("should render right answer", () => {
    render(<MockRouter />);
    const ans = screen.getByTestId("ans");
    expect(ans).toHaveTextContent(/You got 3/i);
  });

  test("should render Wrong answer", () => {
    render(<MockRouter />);
    const wrongAns = screen.getByTestId("wrongans");
    expect(wrongAns).toHaveTextContent(/wrong Ans 2/i);
  });

  test("should render Wpie chart", () => {
    render(<MockRouter />);
    const chart = screen.getByTestId("chart");
    expect(chart).toBeInTheDocument();
  });
  test("User question", () => {
    render(<MockRouter />);
    const question = screen.getAllByTestId("queslist");
    expect(question.length).toBe(5);
  });

});
