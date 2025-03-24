import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

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

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { axiosInstance } from "../../config/axiosInstance";

import { AuthContext } from "../../contexts/AuthProvider";

const schema = z.object({
  email: z.string().min(4, { message: "Required" }),
  password: z.string().min(10, { message: "Required" }),
});

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitForm = async (data) => {
    try {
      console.log("logging in:", data);
      const response = await axiosInstance.post("auth/login", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data?.token) {
        login(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/");

        console.log("Token stored:", response.data.token);
        console.log("User logged in successfully!");
        // window.location.href = "/dashboard"; // Redirect user after login
      } else {
        console.error("Login failed: No token received");
      }

      // console.log("User:", response.data);
    } catch (err) {
      console.log(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="w-full h-full px-6 py-10 text-black flex flex-col justify-between">
      <p>LOGO</p>

      <div className="w-[90%] md:w-[60%] mx-auto space-y-10 ">
        <div className="space-y-2">
          <p>Start your Journey</p>
          <h2 className="font-bold text-3xl">Log in to LOGO</h2>
        </div>
        <form
          action=""
          onSubmit={handleSubmit(submitForm)}
          className="  flex flex-col gap-6 self-center "
        >
          <TextField
            id="outlined-required"
            label="email"
            placeholder=" example@mail.com"
            autoComplete="email"
            // defaultValue="Hello World"
            {...register("email")}
          />
          {errors.email?.message && <p>{errors.email?.message}</p>}
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            {...register("password")}
          />
          {errors.password?.message && <p>{errors.password?.message}</p>}

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
            type="submit"
          >
            Log In
          </Button>
        </form>

        <p>Or Log in with </p>

        <div className="flex justify-between">
          <div className="border border-gray-400 px-8 md:px-12 py-2 rounded-md ">
            <FacebookIcon sx={{ fontSize: 25 }} />
          </div>
          <div className="border border-gray-400 px-8 md:px-12 py-2 rounded-md ">
            <GoogleIcon sx={{ fontSize: 25 }} />
          </div>
          <div className="border border-gray-400 px-8 md:px-12 py-2 rounded-md ">
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
