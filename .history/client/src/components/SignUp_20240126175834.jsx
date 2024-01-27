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
                <Field as={TextField} type="text" name="nom" className="mt-1 w-full" variant="outlined" />
                <ErrorMessage name="nom" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="w-1/2">
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
                  Prénom
                </label>
                <Field as={TextField} type="text" name="prenom" className="mt-1 w-full" variant="outlined" />
                <ErrorMessage name="prenom" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field as={TextField} type="email" name="email" className="mt-1 w-full" variant="outlined" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mot de passe
              </label>
              <Field as={TextField} type="password" name="password" className="mt-1 w-full" variant="outlined" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirmer le mot de passe
              </label>
              <Field as={TextField} type="password" name="confirmPassword" className="mt-1 w-full" variant="outlined" />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/3">
                <label htmlFor="ville" className="block text-sm font-medium text-gray-700">
                  Ville
                </label>
                <Field as={TextField} type="text" name="ville" className="mt-1 w-full" variant="outlined" />
                <ErrorMessage name="ville" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="w-1/3">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                  Région
                </label>
                <Field as={TextField} type="text" name="region" className="mt-1 w-full" variant="outlined" />
                <ErrorMessage name="region" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="w-1/3">
                <label htmlFor="codePostal" className="block text-sm font-medium text-gray-700">
                  Code postal
                </label>
                <Field as={TextField} type="text" name="codePostal" className="mt-1 w-full" variant="outlined" />
                <ErrorMessage name="codePostal" component="div" className="text-red-500 text-sm" />
              </div>
            </div>

            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
                Numéro de téléphone
              </label>
              <Field as={TextField} type="tel" name="telephone" className="mt-1 w-full" variant="outlined" />
              <ErrorMessage name="telephone" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="siteWeb" className="block text-sm font-medium text-gray-700">
                Site web (optional)
              </label>
              <Field as={TextField} type="text" name="siteWeb" className="mt-1 w-full" variant="outlined" />
              <ErrorMessage name="siteWeb" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                Photo de profil (importer)
              </label>
              <Field type="file" name="photo" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
              <ErrorMessage name="photo" className="text-red-500 text-sm" />
            </div>

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
                variant="contained"
                color="secondary"
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
