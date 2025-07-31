"use client";

import React, {useState} from "react";
import {redirect} from "next/navigation";
import {cookies} from "next/headers";

export default function register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

        <div className="relative bg-gray-800 p-8 sm:p-12 md:p-16 rounded-xl shadow-2xl flex flex-col justify-center items-center w-full max-w-md mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Register
          </h1>

          <div className="relative w-full mb-4">
            <input
              type="text"
              className="border border-gray-700 bg-gray-900 w-full p-3 rounded-lg transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none hover:border-gray-600"
              placeholder="Full Name"
            />
          </div>

          <div className="relative w-full mb-4">
            <input
              type="email"
              className="border border-gray-700 bg-gray-900 w-full p-3 rounded-lg transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none hover:border-gray-600"
              placeholder="Email Address"
            />
          </div>

          <div className="relative w-full mb-4">
            <input
              type="text"
              className="border border-gray-700 bg-gray-900 w-full p-3 rounded-lg transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none hover:border-gray-600"
              placeholder="Username"
            />
          </div>

          <div className="relative w-full mb-4">
            <input
              type={showPassword ? "text" : "password"}
              className="border border-gray-700 bg-gray-900 w-full p-3 rounded-lg transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none hover:border-gray-600"
              placeholder="Password"
            />
          </div>

          <div className="relative w-full mb-4">
            <input
              type={showPassword ? "text" : "password"}
              className="border border-gray-700 bg-gray-900 w-full p-3 rounded-lg transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none hover:border-gray-600"
              placeholder="Confirm Password"
            />
          </div>

          <div className="flex items-center w-full mb-6">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
              className="w-4 h-4 text-purple-600 bg-gray-900 border-gray-700 rounded focus:ring-purple-500 focus:ring-2"
            />
            <label
              htmlFor="showPassword"
              className="ml-2 text-sm text-gray-400 cursor-pointer hover:text-purple-400 transition-colors duration-300"
            >
              Show password
            </label>
          </div>

          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 w-full">
            Create Account
          </button>

          <div className="text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-purple-400 hover:underline transition-colors duration-300"
            >
              Login here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
