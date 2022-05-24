import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export interface IUser {
  name: string;
  gender: string;
  exam: string;
}
const Home = () => {
  const history = useHistory();
  const [userData, setUserData] = useState<IUser>({
    name: "",
    gender: "male",
    exam: "html",
  });
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handelSubmit = () => {
    history.push("/exam", userData);
  };
  return (
    <Box data-testid="home">
      <Typography variant="h4">User Data</Typography>
      <Box>
        <TextField
          value={userData.name}
          onChange={handelChange}
          name="name"
          inputProps={{ "data-testid": "name" }}
        />
      </Box>
      <Box>
        <TextField
          value={userData.gender}
          onChange={handelChange}
          name="gender"
          inputProps={{ "data-testid": "gender" }}
          select
        >
          <MenuItem value="male" data-testid="male">Male</MenuItem>
          <MenuItem value="female" data-testid="female">Female</MenuItem>
        </TextField>
      </Box>
      <Box>
        <TextField
          value={userData.exam}
          onChange={handelChange}
          name="exam"
          inputProps={{ "data-testid": "exam" }}
          select
        >
          <MenuItem value="html">Html</MenuItem>
          <MenuItem value="css">Css</MenuItem>
        </TextField>
      </Box>
      <Button
        variant="contained"
        data-testid="button"
        onClick={handelSubmit}
        disabled={!userData.name}
      >
        Start Quiz
      </Button>
    </Box>
  );
};

export default Home;
