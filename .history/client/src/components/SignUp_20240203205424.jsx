import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../App";
import { useTranslation } from "react-i18next";

import Footer from "./super/Footer";

const SignUp = () => {
  const [specialities, setSpecialities] = useState([]);
  const { userData } = useUserData();

  useEffect(() => {
    const fetchSpecialities = async () => {
      try {
        const response = await axios.get(
          "http://192.168.137.210:8000/speciality/speciality_list"
        );
        setSpecialities(response.data);
      } catch (error) {
        console.error("Error fetching specialities:", error);
      }
    };

    fetchSpecialities();
  }, []);

  return (
    <div className="flex flex-col w-full bg-lightBrown pt-5">
      <div className="bg-white flex flex-col mx-[4rem] phone:max-tablet:mx-[1rem] px-[3rem] py-[1.5rem]">
        <SignupForm specialities={specialities} />
      </div>
      <Footer />
    </div>
  );
};

const SignupForm = ({ onCancel, onSubmit, specialities }) => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Use useTranslation hook to access translation function

  const [isSubmitting, setIsSubmitting] = useState(false);
  /*  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    telephone: "",
    ville: "",
    region: "",
    codepostal: "",
    siteweb: "",
    photo: null,
    id_speciality: "",
    langue: "",
  }); */

  /*   const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }; */

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const endpoint =
        values.role === "Avocat"
          ? "avocat/register_avocat"
          : "client/register_client";

      const postData = {
        ...(values.role === "Avocat" && {
          avocat: {
            first_name: values.first_name,
            last_name: values.last_name,
            ville: values.ville,
            region: values.region,
            codepostal: values.codepostal,
            siteweb: values.siteweb || null,
            langue: values.langue,
            photo: values.photo,
            email: values.email,
            password: values.password,
            telephone: values.telephone,
            latitude: 4,
            longtitude: 4,
          },
          id_speciality: parseint(),
        }),
        ...(values.role === "Client" && {
          username: values.username,
          email: values.email,
          password: values.password,
          telephone: values.telephone,
        }),
      };

      console.log(postData);

      const response = await axios.post(
        `http://192.168.137.210:8000/${endpoint}`,
        postData
      );

      navigate("/SignIn");

      console.log(response.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  /*   const handleReset = () => {
    setValues({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirmPassword: "",
      telephone: "",
      ville: "",
      region: "",
      codepostal: "",
      siteweb: "",
      photo: null,
      id_speciality: "",
    });
  }; */

  return (
    <div className="mx-auto w-[65%] phone:max-tablet:w-full">
      <h3 className="text-3xl tracking-wide font-semibold recursive">
        {t("signUp")}
      </h3>

      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          telephone: "",
          ville: "",
          region: "",
          codepostal: "",
          siteweb: "",
          photo: null,
          id_speciality: "",
          langue: "",
          role: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string().required(t("validation.userNameRequired")),
          langue: Yup.string().required(t("validation.langueRequired")),
          first_name: Yup.string().required(t("validation.firstNameRequired")),
          last_name: Yup.string().required(t("validation.lastNameRequired")),
          email: Yup.string()
            .email(t("validation.emailInvalid"))
            .required(t("validation.emailRequired")),
          password: Yup.string()
            .min(8, t("validation.passwordLength"))
            .required(t("validation.passwordRequired")),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], t("validation.passwordMatch"))
            .required(t("validation.confirmPasswordRequired")),
          telephone: Yup.string().required(t("validation.telephoneRequired")),
          ville: Yup.string().required(t("validation.villeRequired")),
          region: Yup.string().required(t("validation.regionRequired")),
          codepostal: Yup.string().required(t("validation.codepostalRequired")),
          siteweb: Yup.string().notRequired(),
          photo: Yup.mixed().required(t("validation.photoRequired")),
          id_speciality: Yup.string().required(
            t("validation.specialityRequired")
          ),
          role: Yup.string().required(t("validation.roleRequired")),
        })}
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
        }}
      >
        {({ resetForm, setFieldValue, values }) => (
          <Form className="space-y-[2rem]">
            <div>
              <Field
                as={TextField}
                type="text"
                name="role"
                label={t("role")}
                select
                SelectProps={{
                  native: true,
                }}
                className=" px-2 py-1 mt-3 w-full"
                variant="standard"
              >
                <option value=""></option>

                <option className=" cursor-pointer px-2" value="Avocat">
                  {t("avocat")}
                </option>
                <option className=" cursor-pointer px-2" value="Client">
                  {t("client")}
                </option>
              </Field>
              <ErrorMessage
                name="role"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            {values.role === "Client" && (
              <div className="phone:max-tablet:w-full">
                <Field
                  as={TextField}
                  type="text"
                  name="username"
                  label={t("userName")}
                  className="mt-1 w-full"
                  variant="standard"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            )}
            {values.role === "Avocat" && (
              <div className="flex  phone:max-tablet:flex-col gap-[2rem]">
                <div className="w-1/2 phone:max-tablet:w-full">
                  <Field
                    as={TextField}
                    type="text"
                    name="first_name"
                    label={t("firstName")}
                    className="mt-1 w-full"
                    variant="standard"
                  />
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="w-1/2 phone:max-tablet:w-full">
                  <Field
                    as={TextField}
                    type="text"
                    name="last_name"
                    label={t("lastName")}
                    className="mt-1 w-full"
                    variant="standard"
                  />
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            )}

            <div>
              <Field
                as={TextField}
                type="email"
                name="email"
                label={t("email")}
                className="mt-1 w-full"
                variant="standard"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <Field
                as={TextField}
                type="password"
                name="password"
                label={t("password")}
                className="mt-1 w-full"
                variant="standard"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <Field
                as={TextField}
                type="password"
                name="confirmPassword"
                label={t("confirmPassword")}
                className="mt-1 w-full"
                variant="standard"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {values.role === "Avocat" && (
              <div className="flex phone:max-tablet:flex-col gap-[2rem]">
                <div className="w-1/3 phone:max-tablet:w-full">
                  <Field
                    as={TextField}
                    type="text"
                    name="ville"
                    label={t("city")}
                    className="mt-1 w-full"
                    variant="standard"
                  />
                  <ErrorMessage
                    name="ville"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="w-1/3 phone:max-tablet:w-full">
                  <Field
                    as={TextField}
                    type="text"
                    name="region"
                    label={t("region")}
                    className="mt-1 w-full"
                    variant="standard"
                  />
                  <ErrorMessage
                    name="region"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="w-1/3 phone:max-tablet:w-full">
                  <Field
                    as={TextField}
                    type="text"
                    name="codepostal"
                    label={t("postalCode")}
                    className="mt-1 w-full"
                    variant="standard"
                  />
                  <ErrorMessage
                    name="codepostal"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
            )}
            <div>
              <Field
                as={TextField}
                type="tel"
                name="telephone"
                label={t("phoneNumber")}
                className="mt-1 w-full"
                variant="standard"
              />
              <ErrorMessage
                name="telephone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {values.role === "Avocat" && (
              <>
                <div>
                  <Field
                    as={TextField}
                    type="text"
                    name="siteweb"
                    label={t("website")}
                    className="mt-1 w-full"
                    variant="standard"
                  />
                  <ErrorMessage
                    name="siteweb"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {t("profilePhoto")}
                  </label>
                  <Field
                    type="file"
                    name="photo"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  />
                  <ErrorMessage name="photo" className="text-red-500 text-sm" />
                </div>
                <div>
                  <Field
                    as={TextField}
                    type="text"
                    name="id_speciality"
                    label={t("chooseSpecialty")}
                    select
                    SelectProps={{
                      native: true,
                    }}
                    className="mt-1 w-full"
                    variant="standard"
                  >
                    <option value=""></option>
                    {specialities.map((speciality) => (
                      <option key={speciality.id} value={speciality.id}>
                        {speciality.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="id_speciality"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <Field
                    as={TextField}
                    type="text"
                    name="langue"
                    label={t("chooseLanguage")}
                    select
                    SelectProps={{
                      native: true,
                    }}
                    className=" px-2 py-1 mt-1 w-full"
                    variant="standard"
                  >
                    <option value=""></option>

                    <option className=" cursor-pointer px-2" value="french">
                      {t("french")}
                    </option>
                    <option className=" cursor-pointer px-2" value="arabic">
                      {t("arabic")}
                    </option>
                  </Field>
                  <ErrorMessage
                    name="langue"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>{" "}
              </>
            )}

            <div className="flex justify-between">
              <Button
                onClick={() => handleSubmit(values)}
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "#D4AD6B",
                }}
              >
                {t("signUp")}
              </Button>
              <Button
                type="button"
                onClick={resetForm}
                variant="outlined"
                color="primary"
                style={{
                  backgroundColor: "white",
                  borderColor: "#D4AD6B",
                  color: "#D4AD6B",
                }}
              >
                {t("cancel")}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
