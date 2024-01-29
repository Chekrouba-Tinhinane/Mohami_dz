import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "./assets/icons/google.svg";
import scene from "./assets/sign/scene2.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useUserData } from "./App";

const SignIn = () => {
  const { userData, setUserData } = useUserData();
  const navigate = useNavigate();

  // Check if user is already authenticated
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Redirect to dashboard or profile page if user is already logged in
      navigate("/SelfProfile");
    }
  }, []);

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://192.168.137.210:8000/avocat/login",
        values
      );
      const { avocat, speciality, jwt } = response.data;

      // Save token to localStorage
      localStorage.setItem("token", jwt.token);

      // Set user data in context
      setUserData(avocat);

      // Navigate to "/SelfProfile" after successful login
      navigate("/SelfProfile");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex h-screen items-center">
      {/* Your existing JSX */}
    </div>
  );
};

export default SignIn;
