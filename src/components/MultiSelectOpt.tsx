import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { IProps } from "./FollowingMatchOpt";

const MultiSelectOpt: React.FC<IProps> = ({ question, handelAns, isAns }) => {
  return (
    <FormGroup data-testid="multiselect">
      {question.options?.map((op) => (
        <FormControlLabel
          label={op}
          key={op}
          control={
            <Checkbox
              value={op}
              onChange={(e) => handelAns(op, e.target.checked)}
              checked={isAns(op)}
            />
          }
        />
      ))}
    </FormGroup>
  );
};

export default MultiSelectOpt;
