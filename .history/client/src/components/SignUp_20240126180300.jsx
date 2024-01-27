import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";

const SignUp = () => {
  const handleCancel = (resetForm) => {
    resetForm();
  };

  return (
    <div className="flex flex-col w-full bg-lightBrown py-5">
      <div className="bg-white flex flex-col mx-[4rem] px-[3rem] py-[1.5rem]">
        <h3 className="text-3xl tracking-wide font-semibold recursive">S'inscrire</h3>
        <SignupForm onCancel={handleCancel} />
      </div>
    </div>
  );
};

const SignupForm = ({ onCancel }) => {
  return (
    <div className=" mx-auto w-[75%]">
      <Formik
        initialValues={{
          nom: "",
          prenom: "",
          email: "",
          password: "",
          confirmPassword: "",
          telephone: "",
          ville: "",
          region: "",
          codePostal: "",
          siteWeb: "",
          photo: null
        }}
        validationSchema={Yup.object({
          nom: Yup.string().required("Required"),
          prenom: Yup.string().required("Required"),
          email: Yup.string().email("Invalid email address").required("Required"),
          password: Yup.string()
            .min(8, "Must be at least 8 characters")
            .required("Required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Required"),
          telephone: Yup.string().required("Required"),
          ville: Yup.string().required("Required"),
          region: Yup.string().required("Required"),
          codePostal: Yup.string().required("Required"),
          siteWeb: Yup.string().notRequired(""),
          photo: Yup.mixed().required("Required")
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, resetForm }) => (
          <Form className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <Field as={TextField} type="text" name="nom" className="mt-1 w-full" variant="standard" />
                <ErrorMessage name="nom" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="w-1/2">
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
                  Prénom
                </label>
                <Field as={TextField} type="text" name="prenom" className="mt-1 w-full" variant="standard" />
                <ErrorMessage name="prenom" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            {/* Other fields... */}

            <div className="flex justify-between">
              <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
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
                style={{ backgroundColor: "white", borderColor: "#D4AD6B", color: "#D4AD6B" }}
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
