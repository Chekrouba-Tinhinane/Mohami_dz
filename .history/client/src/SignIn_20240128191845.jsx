import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "./assets/icons/google.svg";
import scene from "./assets/sign/scene2.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useUserData } from "./App";

const SignIn = () => {
  const [userType, setUserType] = useState("client");
  const { setUserData } = useUserData();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      let loginEndpoint = "";
      switch (userType) {
        case "client":
          loginEndpoint = "client/login";
          break;
        case "avocat":
          loginEndpoint = "avocat/login";
          break;
        case "admin":
          loginEndpoint = "admin/login";
          break;
        default:
          break;
      }

      const response = await axios.post(
        `http://192.168.137.210:8000/${loginEndpoint}`,
        values
      );
        console.log(response.data)
      const { jwt, UserData } = response.data;
      setUserData(UserData || response.data);

      switch (userType) {
        case "client":
          navigate("/Search");
          break;
        case "avocat":
          navigate("/SelfProfile");
          break;
        case "admin":
          navigate("/AdminPage");
          // Redirect admin to admin-specific page
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex h-screen items-center">
      <div className="basis-[60%]">
        <img src={scene} className="bg- h-screen w-full object-cover" alt="" />
      </div>

      <div className="relative w-[30%] flex flex-col h-[85%] pb-10 border border-primary mx-auto items-center">
        <h1 className="recursive text-primary absolute -top-10 bg-white">
          Se Connecter
        </h1>

        <header className="text-center my-8">
          <small className="text-gray-500">
            Veuillez saisir vous informations.
          </small>
        </header>

        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={Yup.object({
            username:
              userType === "client"
                ? Yup.string().required("Username is required")
                : null,
            email:
              userType === "avocat"
                ? Yup.string().email("Invalid email format").required("Email is required")
                : null,
            password: Yup.string().required("Password is required"),
          })}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="basis-[60%] w-[65%]">
              {userType === "client" && (
                <div className="flex flex-col">
                  <label htmlFor="username">Nom d'utilisateur</label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className="border-b border-primary rounded-sm outline-none px-1 py-1.5"
                    placeholder="Ex: john_doe"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
              )}

              {userType === "avocat" && (
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="border-b border-primary rounded-sm outline-none px-1 py-1.5"
                    placeholder="Ex: john@example.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
              )}

              {userType === "admin" && (
                <div className="flex flex-col">
                  <label htmlFor="username">Admin Username</label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className="border-b border-primary rounded-sm outline-none px-1 py-1.5"
                    placeholder="Enter admin username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
              )}

              <div className="flex flex-col mt-8">
                <label htmlFor="password">Mot de passe</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="border-b border-primary rounded-sm outline-none px-1 py-1.5"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              

              <div className="flex justify-between mb-9 mt-4">
                <div className="flex gap-2 items-center">
                  <Field
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="mr-2"
                  />
                  <label htmlFor="remember" className="text-xs">
                    Se rappeler de moi
                  </label>
                </div>

                <a className="text-xs opacity-70 cursor-pointer">
                  Mot de passe oublié?
                </a>
              </div>

              <div className="flex flex-col items-center gap-4">
                <button
                  className="bg-primary recursive p-2 tracking-wider font-medium text-white w-full"
                  type="submit"
                >
                  Se connecter
                </button>
                <a
                  href=""
                  className="border border-primary recursive p-2 tracking-wider font-medium justify-center w-full flex gap-4 flex-shrink-0 min-w-max items-center"
                >
                  <img src={google} className="w-[5%]" alt="" />
                  <span className="min-w-max text-sm">Log in with Google</span>
                </a>
              </div>
            </Form>
          )}
        </Formik>

        <footer className="basis-[10%] mt-24">
          <span className="text-xs opacity-70">
            Vous n’avez pas un compte ?
          </span>{" "}
          <Link to={"/Signup"} className="cursor-pointer text-sm font-semibold">
            S'inscrire
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default SignIn;
