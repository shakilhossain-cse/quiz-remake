import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { IQuestion } from "../../utils/question";
import MultipleChooiseOpt from "../MultipleChooiseOpt";

test("Following Match componnent Render", () => {
  const question: IQuestion = {
    id: 1,
    ques: "string",
    options: [""],
    matchAns: [""],
    ans: [""],
    exam: "string",
    type: "",
  };

  const isAns = () => {
    return false;
  };

  const handAns = () => {
    console.log("handle ans");
  };

  render(
    <MultipleChooiseOpt question={question} handelAns={handAns} isAns={isAns} />
  );
  const Option = screen.getByTestId("multiplechooise");
  expect(Option).toBeInTheDocument();
});
