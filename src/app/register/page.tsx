"use client";
import UserServices from "@/services/userServices";
import { Button } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Register = () => {
  // const [showPassword, setShowPassword] = useState(false);

  //   const handleShowHidePw = () => {
  //     setShowPassword(!showPassword);
  //   };

  const userService = new UserServices();
  const [firstName, setfirstName] = React.useState<string>("");
  const [lastName, setlastName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleRegieter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await userService.register({
      firstName,
      lastName,
      email,
      password,
    });
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-2/3 shadow-lg flex rounded-xl">
        <div className="w-1/2 bg-green-400 p-6 text-white hidden md:flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold">Welcome Back!</h2>
          <p className="py-6 text-center">
            To keep connected with us please login with your personal info
          </p>

          <Link href="/login">
            <button
              type="button"
              className="border-2 text-green-500 text-2xl bg-white hover:bg-green-600 hover:text-white focus:ring-4 focus:ring-green-400 font-medium rounded-full text-sm px-8 py-2.5 me-2 mb-2"
            >
              Sign in
            </button>
          </Link>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-green-400 text-2xl font-semibold mb-6 text-center">
            Create Account
          </h2>

          <div className="flex justify-center space-x-3 mb-4">
            <button className="bg-gray-200 rounded-full p-2">
              <FaFacebookF className="text-green-400" />
            </button>
            <button className="bg-gray-200 rounded-full p-2">
              <FaGoogle className="text-green-400" />
            </button>
            <button className="bg-gray-200 rounded-full p-2">
              <FaLinkedinIn className="text-green-400" />
            </button>
          </div>

          <p className="text-green-400 text-center mb-4">
            or use your email for registration:
          </p>

          <form className="space-y-4" onSubmit={handleRegieter}>
            <input
              name="First name"
              type="text"
              placeholder="Enter your firstName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
            <input
              name="last name"
              type="text"
              placeholder="Enter your lastName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-green-400 text-white py-2 rounded-full font-semibold hover:bg-teal-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;