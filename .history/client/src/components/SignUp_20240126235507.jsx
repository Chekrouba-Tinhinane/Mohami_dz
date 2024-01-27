import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const SignUp = () => {
  const handleCancel = (resetForm) => {
    resetForm();
  };

  const handleSubmit = async (values) => {
    try {
      const postData = {
        avocat: {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          password: values.password,
          telephone: values.telephone,
          ville: values.ville,
          region: values.region,
          codepostal: values.codepostal,
          siteweb: values.siteweb,
          photo: values.photo,
          // Assuming default values for latitude, longitude, and langue
          latitude: 0,
          longitude: 0,
          langue: "french",
        },
        id_speciality: values.id_speciality,
      };
      console.log(postData);

      const response = await axios.post(
        "http://192.168.1.127:8000/avocat/register_avocat",
        postData
      );

      alert("Avocat created successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error creating avocat:", error);
    }
  };

  return (
    <div className="flex flex-col w-full bg-lightBrown py-5">
      <div className="bg-white flex flex-col mx-[4rem] px-[3rem] py-[1.5rem]">
        <SignupForm onCancel={handleCancel} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

const SignupForm = ({ onCancel, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const postData = {
        avocat: {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          password: values.password,
          telephone: values.telephone,
          ville: values.ville,
          region: values.region,
          codepostal: values.codepostal,
          siteweb: values.siteweb,
          photo: values.photo,
          // Assuming default values for latitude, longitude, and langue
          latitude: 0,
          longitude: 0,
          langue: "french",
        },
        id_speciality: values.id_speciality,
      };
      console.log(postData);

      const response = await axios.post(
        "http://192.168.1.127:8000/avocat/register_avocat",
        postData
      );

      alert("Avocat created successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error creating avocat:", error);
    }
  };
  const handleReset = () => {
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
/*       photo: null,
 */      id_speciality: "",
    });
  };

  return (
    <div className="mx-auto w-[75%]">
      <h3 className="text-3xl tracking-wide font-semibold recursive">
        S'inscrire
      </h3>

      <Formik
        validationSchema={Yup.object({
          first_name: Yup.string().required("Required"),
          last_name: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be at least 8 characters")
            .required("Required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Required"),
          telephone: Yup.string().required("Required"),
          ville: Yup.string().required("Required"),
          region: Yup.string().required("Required"),
          codepostal: Yup.string().required("Required"),
          siteweb: Yup.string().notRequired(),
          /*           photo: Yup.mixed().required("Required"),
           */ id_speciality: Yup.string().required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          onSubmit(values);
          setIsSubmitting(true);
          setIsSubmitting(false);
          resetForm();
        }}
      >
        {({ resetForm, setFieldValue }) => (
          <Form className="space-y-8">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <Field
                  as={TextField}
                  type="text"
                  name="first_name"
                  label="Nom"
                  className="mt-1 w-full"
                  variant="standard"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="w-1/2">
                <Field
                  as={TextField}
                  type="text"
                  name="last_name"
                  label="Prénom"
                  className="mt-1 w-full"
                  variant="standard"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="last_name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div>
              <Field
                as={TextField}
                type="email"
                name="email"
                label="Email"
                className="mt-1 w-full"
                variant="standard"
                onChange={handleChange}
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
                label="Mot de passe"
                className="mt-1 w-full"
                variant="standard"
                onChange={handleChange}
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
                label="Confirmer le mot de passe"
                className="mt-1 w-full"
                variant="standard"
                onChange={handleChange}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/3">
                <Field
                  as={TextField}
                  type="text"
                  name="ville"
                  label="Ville"
                  className="mt-1 w-full"
                  variant="standard"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="ville"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="w-1/3">
                <Field
                  as={TextField}
                  type="text"
                  name="region"
                  label="Région"
                  className="mt-1 w-full"
                  variant="standard"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="region"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="w-1/3">
                <Field
                  as={TextField}
                  type="text"
                  name="codepostal"
                  label="Code postal"
                  className="mt-1 w-full"
                  variant="standard"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="codepostal"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div>
              <Field
                as={TextField}
                type="tel"
                name="telephone"
                label="Numéro de téléphone"
                className="mt-1 w-full"
                variant="standard"
                onChange={handleChange}
              />
              <ErrorMessage
                name="telephone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <Field
                as={TextField}
                type="text"
                name="siteweb"
                label="Site web (optional)"
                className="mt-1 w-full"
                variant="standard"
                onChange={handleChange}
              />
              <ErrorMessage
                name="siteweb"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Add other form fields here */}

            <div>
              <Field
                as={TextField}
                type="text"
                name="id_speciality"
                label="Spécialité"
                className="mt-1 w-full"
                variant="standard"
                onChange={handleChange}
              />
              <ErrorMessage
                name="id_speciality"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex justify-between">
              <Button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                variant="contained"
                style={{
                  backgroundColor: "#D4AD6B",
                }}
              >
                S'inscrire
              </Button>
              <Button
                type="button"
                disabled={isSubmitting}
                onClick={() => {
                  onCancel(resetForm);
                }}
                variant="outlined"
                color="primary"
                style={{
                  backgroundColor: "white",
                  borderColor: "#D4AD6B",
                  color: "#D4AD6B",
                }}
              >
                Annuler
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
