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

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

const Login = () => {
  return (
    <div className="w-full h-full px-6 py-10 text-black flex flex-col justify-between">
      <p>LOGO</p>

      <div className="w-[60%] mx-auto space-y-10 ">
        <div className="space-y-2">
          <p>Start your Journey</p>
          <h2 className="font-bold text-3xl">Log in to LOGO</h2>
        </div>
        <form action="" className="  flex flex-col gap-6 self-center ">
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

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#083DAF", // Tailwind `bg-blue-500`
              color: "white",
              padding: "16px 16px",
              borderRadius: "6px",
              "&:hover": {
                backgroundColor: "rgb(37, 99, 235)", // Tailwind `hover:bg-blue-600`
              },
            }}
          >
            Log In
          </Button>
        </form>

        <p>Or Log in with </p>

        <div className="flex justify-between">
          <div className="border border-gray-400 px-12 py-2 rounded-md ">
            <FacebookIcon sx={{ fontSize: 25 }} />
          </div>
          <div className="border border-gray-400 px-12 py-2 rounded-md ">
            <GoogleIcon sx={{ fontSize: 25 }} />
          </div>
          <div className="border border-gray-400 px-12 py-2 rounded-md ">
            <AppleIcon sx={{ fontSize: 25 }} />
          </div>
        </div>
      </div>

      <p>
        Don't have an account? <a href="/auth/login">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
