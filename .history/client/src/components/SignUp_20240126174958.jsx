import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const handleCancel = (resetForm) => {
    resetForm();
  };

  return (
    <div className="flex flex-col w-full bg-lightBrown py-5">
      <div className="bg-white flex flex-col mx-[4rem] px-[3rem] py-[1.5rem]">
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
    <div className="max-w-md mx-auto">
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
            {/* Form fields */}

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
