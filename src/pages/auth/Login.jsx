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
  Alert,
  CircularProgress,
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
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [message, setMessage] = useState({ text: "", severity: "" });
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitForm = async (data) => {
    setLoading(true);

    try {
      const response = await axiosInstance.post("auth/login", data, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data?.token) {
        login({
          token: response.data.token,
          email: response.data.email,
          role: response.data.role,
        });

        setMessage({
          text: "Login successful! Redirecting...",
          severity: "success",
        });

        setTimeout(() => {
          switch (response.data.role) {
            case "admin":
              navigate("/admin/dashboard");
              break;
            case "manager":
              navigate("/manager/dashboard");
              break;
            default:
              navigate("/");
          }
        }, 1000);

        console.log("token", response.data);
        // console.log("User logged in successfully!");
      } else {
        throw new Error("No token received");
      }

      // console.log("User:", response.data);
    } catch (err) {
      console.log(err.response?.data?.message || "Login failed");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full px-6 py-10 text-black flex flex-col justify-between">
      <p>LOGO</p>

      <div className="w-[90%] md:w-[60%] mx-auto space-y-10 ">
        <div className="space-y-2">
          <p>Welcome back</p>
          <h2 className="font-bold text-3xl">Log in to LOGO</h2>
        </div>

        {message.text && (
          <Alert severity={message.severity} className="mb-4">
            {message.text}
          </Alert>
        )}

        <form
          action=""
          onSubmit={handleSubmit(submitForm)}
          className="  flex flex-col gap-6 self-center "
        >
          <TextField
            label="Email"
            placeholder="example@mail.com"
            type="email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
            autoFocus
          />

          <TextField
            label="Password"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
          />

          <Button
            variant="contained"
            type="submit"
            disabled={loading}
            fullWidth
            sx={{
              backgroundColor: "#083DAF", // Tailwind `bg-blue-500`
              color: "white",
              padding: "16px 16px",
              borderRadius: "6px",
              "&:hover": {
                backgroundColor: "rgb(37, 99, 235)", // Tailwind `hover:bg-blue-600`
              },
            }}
            endIcon={
              loading ? <CircularProgress size={24} color="inherit" /> : null
            }
          >
            {loading ? "Logging in..." : "Log In"}
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
