import {
  Box,
  Button,
  Chip,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import FollowingMatchOpt from "../components/FollowingMatchOpt";
import MultipleChooiseOpt from "../components/MultipleChooiseOpt";
import MultiSelectOpt from "../components/MultiSelectOpt";
import getQuestion from "../utils/getQuestion";
import { IQuestion } from "../utils/question";
import {
  FillInTheBlanks,
  FollowingMatch,
  MultipleChooise,
  MultiSelect,
  TrueFalse,
  __blank,
} from "../utils/question.types";
import { IUser } from "./Home";

export interface AnsInfo {
  id: number;
  options: string[];
}
export interface IResult {
  correct: number;
  total: number;
}
const Exam = () => {
  const history = useHistory();
  const { state } = useLocation();
  const user = state as IUser;
  const userQuestion: IQuestion[] = getQuestion(user.exam);
  const [quesNo, setQuesNo] = useState<number>(0);
  const currentQues = userQuestion[quesNo];
  const ques = currentQues.ques.split(__blank);
  const [ansData, setAnsData] = useState<AnsInfo[]>([]);

  const handelAns = (option: string, checked?: boolean) => {
    const ans = ansData.find((ans) => ans.id === currentQues.id);
    if (!ans) {
      const answer = { id: currentQues.id, options: [option] };
      setAnsData([...ansData, answer]);
    } else {
      const userAns = ansData.map((ans) => {
        if (ans.id === currentQues.id) {
          if (
            [FillInTheBlanks, TrueFalse, MultipleChooise].includes(
              currentQues.type
            )
          ) {
            ans = { id: currentQues.id, options: [option] };
          }
          if (currentQues.type === MultiSelect) {
            if (checked) {
              ans = { id: currentQues.id, options: [...ans.options, option] };
            } else {
              const answer = ans.options.filter((op) => op !== option);
              ans = { id: currentQues.id, options: answer };
            }
          }
          if (currentQues.type === FollowingMatch) {
            const left = option.split("->")[0];
            const answer = ans.options.filter((op) => !op.startsWith(left));
            ans = { id: currentQues.id, options: [...answer, option] };
          }
        }
        return ans;
      });
      setAnsData(userAns);
    }
  };

  const isAns = (option: string) => {
    const ans = ansData.find((ans) => ans.id === currentQues.id);
    if (!ans) return false;
    return !!ans.options.find((op) => op === option);
  };
  const isQuestion = (quesId: number) => {
    const ans = ansData.find((ans) => ans.id === quesId);
    if (!ans) return false;
    return ans.options.length > 0;
  };

  const handelSubmit = () => {
    let count: number = 0;
    ansData.forEach((ans) => {
      for (const ques of userQuestion) {
        if (ans.id === ques.id) {
          if (
            JSON.stringify([...new Set(ans.options)].sort()) ===
            JSON.stringify([...new Set(ques.ans)].sort())
          ) {
            count++;
          }
          break;
        }
      }
    });
    const question: IQuestion[] = userQuestion;
    const result: IResult = { correct: count, total: userQuestion.length };
    history.push("/result", { question, result });
  };
  return (
    <Box data-testid="exam">
      <Typography variant="h4">Your Exam For {user.exam}</Typography>
      {userQuestion.map((ques, i) => (
        <Chip
          key={i}
          onClick={() => setQuesNo(i)}
          label={i + 1}
          sx={{ marginX: "0.5rem" }}
          color={isQuestion(ques.id) ? "error" : "default"}
          data-testid="quesNum"
        />
      ))}
      {currentQues.type === FillInTheBlanks ? (
        <Typography variant="h4" sx={{ marginY: "5rem" }} >
          {ques[0]}
          <TextField
            variant="standard"
            value={ansData.find((ans) => ans.id === currentQues.id)?.options}
            onChange={(e) => handelAns(e.target.value)}
          />
          {ques[1]}
        </Typography>
      ) : (
        <Typography variant="h4" data-testid="ques">{currentQues.ques}</Typography>
      )}
      <Container>
        {[TrueFalse, MultipleChooise].includes(currentQues.type) && (
          <MultipleChooiseOpt
            handelAns={handelAns}
            isAns={isAns}
            question={currentQues}
          />
        )}
        {currentQues.type === MultiSelect && (
          <MultiSelectOpt
            handelAns={handelAns}
            isAns={isAns}
            question={currentQues}
          />
        )}
        {currentQues.type === FollowingMatch && (
          <FollowingMatchOpt
            handelAns={handelAns}
            isAns={isAns}
            question={currentQues}
          />
        )}
      </Container>
      <Button variant="contained" onClick={handelSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default Exam;
