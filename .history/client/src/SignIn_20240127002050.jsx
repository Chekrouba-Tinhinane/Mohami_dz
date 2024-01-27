import React, { useState } from "react";
import { Link } from "react-router-dom";
import google from "./assets/icons/google.svg";
import scene from "./assets/sign/scene2.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignIn = () => {
  const initialValues = {
    email: "imed@imed",
    password: "imedimed",
  };
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name } = e.target;
    setValues({ ...values, [name]: e.target.value });
    console.log(values);
  };

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post(
        "http://192.168.1.127:8000/avocat/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response.data);
      const { token, user } = response.data;
      setToken(token);
      setUser(user);

      localStorage.setItem("token", token);
      <Link to={"/"} />;
      return { token, user };
    } catch (error) {
      // setErrors((prev) => {
      // return { ...prev, password: "incorrect password" };
      //});
      /* if (error.response.data.errors.email === "That email is not registered") {
        console.log("hey");
        setErrors((prev) => {
          return { ...prev, email: "That email is not registered" };
        });
      } else if (
        error.response.data.errors.password === "That password is incorrect"
      ) {
        setErrors((prev) => {
          return { ...prev, password: "incorrect password" };
        });
      }

      console.log(error.response.data.errors.email);
      return { error: error.response.data }; */
    }
  };

  const handleSubmit = async (values, { setErrors }) => {
    // Handle form submission logic here
    console.log("Form values:", values);

    /* Implement your login logic here */
    const { token, user, error } = await loginUser(
      values.email,
      values.password
    );

    /* if (error) {
      console.log("Login error:", error);
    } else {
      console.log("Login success:", user, token);
      // redirect to dashboard or some other page
    }
    if (error.email === "incorrect email") {
      console.log("hey");
      setErrors((prev) => {
        return { ...prev, email: "That email is not registered" };
      });
    } else if (error.password === "incorrect password") {
      setErrors((prev) => {
        return { ...prev, password: "incorrect password" };
      });
    } */
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
          initialValues={initialValues}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string()
              .required("Password is required")
              .min(8, "Password must be at least 8 characters long"),
          })}
          onSubmit={handleSubmit}
        >
          <Form className="basis-[60%] w-[65%]">
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="border-b border-primary rounded-sm outline-none px-1 py-1.5"
                placeholder="Ex: email_81194@gmail.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs"
              />
            </div>

            <div className="flex flex-col mt-8">
              <label htmlFor="password">Mot de passe</label>
              <Field
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
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
                onClick={handleSubmit}
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
        </Formik>

        <footer className="basis-[10%] mt-32">
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
