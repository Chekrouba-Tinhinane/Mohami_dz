import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const handleCancel = (resetForm) => {
    resetForm();
  };

  return (
    <div className="flex flex-col w-full bg-lightBrown py-5">
      <div className="bg-white flex flex-col w-[70%] mx-[4rem] px-[3rem] py-[1.5rem]">
        <h3 className="text-3xl tracking-wide font-semibold recursive">
          S'inscrire
        </h3>
        <SignupForm onCancel={handleCancel} />
      </div>
    </div>
  );
};

const SignupForm = ({ onCancel }) => {
  return (
    <div className=" w-[60%] mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
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
          photo: null,
        }}
        validationSchema={Yup.object({
          nom: Yup.string().required("Required"),
          prenom: Yup.string().required("Required"),
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
          codePostal: Yup.string().required("Required"),
          siteWeb: Yup.string().notRequired(""),
          photo: Yup.mixed().required("Required"),
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
                <label
                  htmlFor="nom"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom
                </label>
                <Field
                  type="text"
                  name="nom"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                <ErrorMessage name="nom" className="text-red-500" />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="prenom"
                  className="block text-sm font-medium text-gray-700"
                >
                  Prénom
                </label>
                <Field
                  type="text"
                  name="prenom"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                <ErrorMessage name="prenom" className="text-red-500" />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              <ErrorMessage name="email" className="text-red-500" />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mot de passe
              </label>
              <Field
                type="password"
                name="password"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              <ErrorMessage name="password" className="text-red-500" />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirmer le mot de passe
              </label>
              <Field
                type="password"
                name="confirmPassword"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              <ErrorMessage name="confirmPassword" className="text-red-500" />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/3">
                <label
                  htmlFor="ville"
                  className="block text-sm font-medium text-gray-700"
                >
                  Ville
                </label>
                <Field
                  type="text"
                  name="ville"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                <ErrorMessage name="ville" className="text-red-500" />
              </div>
              <div className="w-1/3">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium text-gray-700"
                >
                  Région
                </label>
                <Field
                  type="text"
                  name="region"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                <ErrorMessage name="region" className="text-red-500" />
              </div>
              <div className="w-1/3">
                <label
                  htmlFor="codePostal"
                  className="block text-sm font-medium text-gray-700"
                >
                  Code postal
                </label>
                <Field
                  type="text"
                  name="codePostal"
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                <ErrorMessage name="codePostal" className="text-red-500" />
              </div>
            </div>

            <div>
              <label
                htmlFor="telephone"
                className="block text-sm font-medium text-gray-700"
              >
                Numéro de téléphone
              </label>
              <Field
                type="tel"
                name="telephone"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              <ErrorMessage name="telephone" className="text-red-500" />
            </div>

            <div>
              <label
                htmlFor="siteWeb"
                className="block text-sm font-medium text-gray-700"
              >
                Site web (optional)
              </label>
              <Field
                type="text"
                name="siteWeb"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              <ErrorMessage name="siteWeb" className="text-red-500" />
            </div>

            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo de profil (importer)
              </label>
              <Field
                type="file"
                name="photo"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              <ErrorMessage name="photo" className="text-red-500" />
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                S'inscrire
              </button>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => {
                  onCancel(resetForm);
                }}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Annuler
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
