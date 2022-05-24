import { Radio, Table, TableBody, TableCell, TableRow } from "@mui/material";
import React from "react";
import { IQuestion } from "../utils/question";
export interface IProps {
  question: IQuestion;
  handelAns(option: string, checked?: boolean): void;
  isAns(option: string): boolean;
}
const FollowingMatchOpt: React.FC<IProps> = ({
  question,
  handelAns,
  isAns,
}) => {
  return (
    <Table data-testid="folloingmatch">
      <TableBody>
        <TableRow>
          <TableCell />
          {question.matchAns?.map((ans) => (
            <TableCell key={ans}>{ans}</TableCell>
          ))}
        </TableRow>
        {question.options?.map((op) => (
          <TableRow key={op}>
            <TableCell>{op}</TableCell>
            {question.matchAns?.map((ans) => (
              <TableCell key={ans}>
                <Radio
                  onChange={(e) => handelAns(op + "->" + e.target.value)}
                  name={op}
                  checked={isAns(op + "->" + ans)}
                  value={ans}
                />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FollowingMatchOpt;
