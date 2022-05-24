import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import { IQuestion } from "../utils/question";
import { IResult } from "./Exam";

interface AllData {
  question: IQuestion[];
  result: IResult;
}
const Result = () => {
  const { state } = useLocation();
  const data = state as AllData;

  const deg = (a: number, b: number) => (360 * a) / (a + b);
  return (
    <Box data-testid="result">
      <Typography variant="h3">Your Result</Typography>
      <Typography variant="h4" color="green" data-testid="ans">
        You got {data.result.correct}
      </Typography>
      <Typography variant="h4" color="red" data-testid="wrongans">
        wrong Ans {data.result.total - data.result.correct}
      </Typography>
      <Box
        margin="auto"
        width="20rem"
        height="20rem"
        borderRadius="50%"
        style={{
          backgroundImage: `conic-gradient(green 0deg ${deg(
            data.result.correct,
            data.result.total - data.result.correct
          )}deg, red ${deg(
            data.result.correct,
            data.result.total - data.result.correct
          )}deg 360deg)`,
        }}
        data-testid="chart"
      ></Box>
      <Container>
        <Box>
          {data.question.map((ques) => (
            <Box key={ques.id} margin="3rem" data-testid="queslist">
              <Typography variant="h5">Ques: {ques.ques}</Typography>
              <Divider />
              {ques.ans.map((ans) => (
                <Typography key={ans} variant="h5" color="green">
                  Ans : {ans}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Result;
