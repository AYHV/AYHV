"use client";
import UserServices from "@/service/userservice";
import { Button, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaLock, FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const RegisterPage = () => {
  const userService = new UserServices();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleShowHidePw = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRegister = async () => {
    setError(null);
    setSuccess(null);
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const result = await userService.register({ name, email, password });
      setSuccess("Registration successful! You can now log in.");
      console.log("Registration result:", result);
    } catch (err) {
      setError("Failed to register. Please try again.");
      console.error("Register error:", err);
    }
  };

  return (
    <div className="h-screen bg-gray-300 flex justify-center items-center">
      <div className="w-5/6 lg:w-2/3 xl:w-1/2 h-auto bg-slate-700 flex flex-col justify-center items-center rounded-md p-6 space-y-4">
        <h1 className="text-teal-500 text-2xl font-bold text-center">Register to orkard tech system</h1>
        <p className="text-gray-400 text-center">Create your account to get started</p>

        {/* Name Field */}
        <div className="relative w-full">
          <FaUser className="absolute top-3 left-3 text-gray-500" />
          <TextInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            className="w-full pl-10"
            id="name"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="relative w-full">
          <MdEmail className="absolute top-3 left-3 text-gray-500" />
          <TextInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            className="w-full pl-10"
            id="email"
            type="email"
            placeholder="YourEmail@gmail.com"
            required
          />
        </div>

        {/* Password Field */}
        <div className="relative w-full">
          <TextInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            className="w-full pl-10"
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <FaLock className="absolute top-3 left-3 text-gray-500" />
          <div
            onClick={handleShowHidePw}
            className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="relative w-full">
          <TextInput
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
            className="w-full pl-10"
            id="confirmPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            required
          />
          <FaLock className="absolute top-3 left-3 text-gray-500" />
          <div
            onClick={handleShowHidePw}
            className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        {/* Error and Success Messages */}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}

        {/* Register Button */}
        <Button onClick={handleRegister} className="w-2/3 bg-teal-500 rounded-full">
          Register
        </Button>
        <p className="text-gray-400 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-teal-500 underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
