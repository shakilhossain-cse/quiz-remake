import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FollowingMatchOpt from "../FollowingMatchOpt";
import { IQuestion } from "../../utils/question";

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
    <FollowingMatchOpt question={question} handelAns={handAns} isAns={isAns} />
  );
  const Option = screen.getByTestId("folloingmatch");
  expect(Option).toBeInTheDocument();
});
