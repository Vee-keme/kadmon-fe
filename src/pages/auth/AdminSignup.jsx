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
  Select,
  MenuItem,
  Box,
  Alert,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { axiosInstance } from "../../config/axiosInstance";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  // password: z.string()
  //   .min(10, { message: "Password must be at least 10 characters" })
  //   .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
  //   .regex(/[0-9]/, { message: "Must contain at least one number" }),
  password: z.string().min(10, { message: "Required" }),
  role: z.enum(["user", "manager", "admin"]).default("user"),
});

const AdminSignup = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState({ text: "", severity: "" });
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      role: "user", // Default role for new signups
    },
  });

  const submitForm = async (data) => {
    try {
      console.log("Submitting data:", data);
      const response = await axiosInstance.post("auth/signup", data, {
        headers: { "Content-Type": "application/json" },
      });

      setMessage({
        text: "Signup successful! Redirecting to login...",
        severity: "success",
      });

      reset();
      setTimeout(() => navigate("/auth/login"), 1000);
      console.log("User:", response.data);
    } catch (err) {
      setMessage({
        text: err.response?.data?.message || "Signup failed. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const showRoleSelector = true; //ONLY SHOW THIS FOR ADMIN OR MANAGER SIGNUP

  return (
    <div className="w-full h-full px-6 py-10 text-black flex flex-col justify-between">
      <p>LOGO</p>

      <div className="w-[90%] md:w-[60%] mx-auto space-y-10 ">
        <div className="space-y-2">
          <p>Start your Journey</p>
          <h2 className="font-bold text-3xl">Sign up to LOGO</h2>
        </div>

        {message.text && (
          <Alert severity={message.severity} className="mb-4">
            {message.text}
          </Alert>
        )}

        <form
          action=""
          className="  flex flex-col gap-6 self-center "
          onSubmit={handleSubmit(submitForm)}
        >
          <TextField
            label="Email"
            placeholder="example@mail.com"
            type="email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />

          <TextField
            label="Password"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
          />

          {showRoleSelector && (
            <FormControl fullWidth>
              <InputLabel id="role-label">Role</InputLabel>
              <Select
                labelId="role-label"
                label="Role"
                {...register("role")}
                defaultValue="user"
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="manager">Manager</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
          )}

          <Box mt={2}>
            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              fullWidth
              sx={{
                backgroundColor: "#083DAF", // Tailwind `bg-blue-500`
                color: "white",
                padding: "12px",
                borderRadius: "6px",
                "&:hover": {
                  backgroundColor: "rgb(37, 99, 235)", // Tailwind `hover:bg-blue-600`
                },
                "&:disabled": {
                  backgroundColor: "#cccccc",
                },
              }}
            >
              {loading ? "Processing..." : "Sign Up"}
            </Button>
          </Box>
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

export default AdminSignup;
