"use client";

import UserServices from "@/service/userservice";
import { Button, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaFacebookF, FaGoogle, FaGithub, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const LoginPage = () => {
  const userService = new UserServices();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowHidePw = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const result = await userService.login({ email, password });
      console.log("Login Result:", result);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="h-screen bg-gray-300 flex justify-center items-center">
      <div className="w-5/6 lg:w-2/3 xl:w-1/2 h-1/2 bg-slate-700 flex justify-center items-center rounded-md">
        {/* Left side */}
        <div className="w-5/6 sm:w-2/3 md:w-1/2 flex flex-col justify-center items-center space-y-4 p-4">
          <h1 className="text-teal-500 text-2xl font-bold text-center">
            Login to Orkard Tech System
          </h1>
          <div className="w-full flex justify-center space-x-2">
            <p className="bg-gray-300 p-2 rounded-full">
              <FaFacebookF className="text-teal-500" />
            </p>
            <p className="bg-gray-300 p-2 rounded-full">
              <FaGoogle className="text-teal-500" />
            </p>
            <p className="bg-gray-300 p-2 rounded-full">
              <FaGithub className="text-teal-500" />
            </p>
          </div>
          <p className="text-gray-400">or use your email account</p>

          {/* Email Input */}
          <div className="relative w-full">
            <MdEmail className="absolute left-3 top-3 text-gray-400" />
            <TextInput
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="YourEmail@gmail.com"
              className="pl-10"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative w-full">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <TextInput
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="pl-10 pr-10"
              required
            />
            <span
              onClick={handleShowHidePw}
              className="absolute right-3 top-3 text-gray-400 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Login Button */}
          <Button
            onClick={handleLogin}
            className="w-2/3 bg-teal-500 rounded-full"
          >
            Sign in
          </Button>

          {/* Sign Up Button (Mobile) */}
          <Button className="w-2/3 bg-teal-500 rounded-full md:hidden">
            Sign up
          </Button>
        </div>

        {/* Right side */}
        <div className="bg-teal-500 w-1/2 justify-center h-full hidden md:flex">
          <div className="h-full flex flex-col justify-center items-center space-y-3 p-4">
            <h1 className="text-white text-3xl font-bold text-center">
              Hello, friend!
            </h1>
            <p className="text-gray-200 text-center">
              Enter your personal details and start to join us!
            </p>
            <Link href="/register" passHref>
              <Button className="text-white rounded-full px-5 border- bg-transform">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
