import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { IProps } from "./FollowingMatchOpt";

const MultipleChooiseOpt: React.FC<IProps> = ({
  question,
  handelAns,
  isAns,
}) => {
  return (
    <RadioGroup onChange={(e) => handelAns(e.target.value)} data-testid="multiplechooise">
      {question.options?.map((op) => (
        <FormControlLabel
          label={op}
          key={op}
          control={<Radio value={op} checked={isAns(op)} />}
        />
      ))}
    </RadioGroup>
  );
};

export default MultipleChooiseOpt;
