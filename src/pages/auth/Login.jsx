import React from "react";

import { Link } from "react-router-dom";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Button,
} from "@mui/material";

const Login = () => {
  return (
    <div className="w-full h-full px-6 py-10 text-black flex flex-col justify-between">
      <p>LOGO</p>

      <div className="w-[70%] mx-auto space-y-10 ">
        <div className="space-y-2">
          <p>Start your Journey</p>
          <h2 className="font-bold text-3xl">Log in to LOGO</h2>
        </div>
        <form action="" className="  flex flex-col gap-4 self-center ">
          <TextField
            id="outlined-required"
            label="Email"
            placeholder=" example@mail.com"
            // defaultValue="Hello World"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />

          <Button variant="contained">Login Up</Button>
        </form>

        <p>Or log in with </p>

        <div></div>
      </div>

      <p>
        Don't have an account? <a href="/auth/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
