import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
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

const schema = z.object({
  email: z.string().min(4, { message: "Required" }),
  password: z.string().min(10, { message: "Required" }),
  role: z.string().min(1, { message: "Required" }),
});

const Signup = () => {
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
      console.log("Submitting data:", data);
      const response = await axiosInstance.post("auth/signup", data, {
        headers: { "Content-Type": "application/json" },
      });
      setMessage("Signup successful!");
      console.log("User:", response.data);
      navigate("/auth/login");
    } catch (err) {
      setMessage(`${err.response?.data?.message} message` || "Signup failed");
    }
  };

  return (
    <div className="w-full h-full px-6 py-10 text-black flex flex-col justify-between">
      <p>LOGO</p>

      <div className="w-[90%] md:w-[60%] mx-auto space-y-10 ">
        <div className="space-y-2">
          <p>Start your Journey</p>
          <h2 className="font-bold text-3xl">Sign up to LOGO</h2>
        </div>
        <form
          action=""
          className="  flex flex-col gap-6 self-center "
          onSubmit={handleSubmit(submitForm)}
        >
          <TextField
            id="outlined-required"
            label="Email"
            placeholder=" example@mail.com"
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
          <TextField
            id="outlined-required"
            label="Role"
            placeholder="User"
            // defaultValue="Hello World"
            {...register("role")}
          />
          {errors.role?.message && <p>{errors.role?.message}</p>}

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
            Sign Up
          </Button>
        </form>

        <p>Or sign up with </p>

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
        Have an account? <a href="/auth/login">Sign In</a>
      </p>
    </div>
  );
};

export default Signup;
