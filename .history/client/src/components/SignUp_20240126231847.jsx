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
          langue: "French",
        },
        id_speciality: values.id_speciality,
      };

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

  return (
    <div className="mx-auto w-[75%]">
      <h3 className="text-3xl tracking-wide font-semibold recursive">
        S'inscrire
      </h3>

      <Formik
        initialValues={{
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
          id_speciality: "", // Assuming the default value for id_speciality
        }}
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
          photo: Yup.mixed().required("Required"),
          id_speciality: Yup.string().required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          setIsSubmitting(true);
          onSubmit(values);
          setIsSubmitting(false);
          resetForm();
        }}
      >
        {({ resetForm }) => (
          <Form className="space-y-8">
            
            <div className="flex justify-between">
              <Button
                type="submit"
                disabled={isSubmitting}
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
