import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "./assets/icons/google.svg";
import scene from "./assets/sign/scene2.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useUserData } from "./App";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const [userType, setUserType] = useState("client");
  const { setUserData } = useUserData();
  const navigate = useNavigate();
  const { t } = useTranslation(); // Access translation function

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
        `http://backend:8000/${loginEndpoint}`,
        values
      );
      console.log(response.data);
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
    <div className="flex h-screen phone:max-lg:my-8">
      <div className="basis-[60%] phone:max-lg:hidden">
        <img src={scene} className="h-screen w-full object-cover" alt="" />
      </div>

      <div className="relative w-[30%] phone:max-lg:w-full phone:max-lg:h-full phone:max-lg:mx-[5rem] flex flex-col my-8 min-h-max border border-primary mx-auto items-center">
        <h1 className="recursive text-primary absolute -top-8  bg-white">
          {t("signIn")}
        </h1>

        <header className="text-center my-8">
          <small className="text-gray-500">{t("signInInfo")}</small>
        </header>

        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={Yup.object({
            username:
              userType === "client"
                ? Yup.string().required(t("usernameRequired"))
                : null,
            email:
              userType === "avocat"
                ? Yup.string()
                    .email(t("invalidEmail"))
                    .required(t("emailRequired"))
                : null,
            password: Yup.string().required(t("passwordRequired")),
          })}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-3">
              <div className="flex flex-col">
                <label htmlFor="userType">{t("loginAs")}</label>
                <select
                  id="userType"
                  name="userType"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="border-b border-primary rounded-sm outline-none px-1 py-1.5"
                >
                  <option value="client">{t("client")}</option>
                  <option value="avocat">{t("lawyer")}</option>
                  <option value="admin">{t("admin")}</option>
                </select>
              </div>
              {userType === "client" && (
                <div className="flex flex-col">
                  <label htmlFor="username">{t("username")}</label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className="border-b border-primary rounded-sm outline-none px-1 py-1.5"
                    placeholder={t("usernamePlaceholder")}
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
                  <label htmlFor="email">{t("email")}</label>
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
                  <label htmlFor="username">{t("adminUsername")}</label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className="border-b border-primary rounded-sm outline-none px-1 py-1.5"
                    placeholder={t("adminUsernamePlaceholder")}
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-500 text-xs"
                  />
                </div>
              )}

              <div className="flex flex-col ">
                <label htmlFor="password">{t("password")}</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="border-b border-primary rounded-sm outline-none px-1 py-1.5"
                  placeholder={t("passwordPlaceholder")}
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
                    {t("rememberMe")}
                  </label>
                </div>

                <a className="text-xs opacity-70 cursor-pointer">
                  {t("forgotPassword")}
                </a>
              </div>

              <div className="flex flex-col items-center gap-4">
                <button
                  className="bg-primary recursive p-2 tracking-wider font-medium text-white w-full"
                  type="submit"
                >
                  {t("signIn")}
                </button>
                <a
                  href=""
                  className="border border-primary recursive p-2 tracking-wider font-medium justify-center w-full flex gap-4 flex-shrink-0 min-w-max items-center"
                >
                  <img src={google} className="w-[5%]" alt="" />
                  <span className="min-w-max text-sm">
                    {t("loginWithGoogle")}
                  </span>
                </a>
              </div>
            </Form>
          )}
        </Formik>

        <footer className="basis-[10%]">
          <span className="text-xs opacity-70">{t("noAccount")}</span>{" "}
          <Link to={"/Signup"} className="cursor-pointer text-sm font-semibold">
            {t("signup")}
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default SignIn;
