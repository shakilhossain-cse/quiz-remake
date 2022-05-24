import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { IQuestion } from "../../utils/question";
import MultipleChooiseOpt from "../MultipleChooiseOpt";
import MultiSelectOpt from "../MultiSelectOpt";

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
    <MultiSelectOpt question={question} handelAns={handAns} isAns={isAns} />
  );
  const Option = screen.getByTestId("multiselect");
  expect(Option).toBeInTheDocument();
});
