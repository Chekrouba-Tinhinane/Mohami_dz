import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const SignUp = () => {
  return (
    <div className=" flex flex-col w-full bg-lightBrown py-5 ">
      <div className=" bg-white flex flex-col mx-[4rem] px-[3rem] py-[1.5rem] ">
        <h3 className=" text-3xl tracking-wide font-semibold recursive">S'inscrire</h3>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUp;




const SignupForm = () => {
  return (
    <div>
      <h1>Sign Up</h1>
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
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="nom">Nom</label>
            <Field type="text" name="nom" />
            <ErrorMessage name="nom" />

            <label htmlFor="prenom">Prénom</label>
            <Field type="text" name="prenom" />
            <ErrorMessage name="prenom" />

            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" />

            <label htmlFor="password">Mot de passe</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" />

            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" />

            <label htmlFor="telephone">Numéro de téléphone</label>
            <Field type="tel" name="telephone" />
            <ErrorMessage name="telephone" />

            <label htmlFor="ville">Ville</label>
            <Field type="text" name="ville" />
            <ErrorMessage name="ville" />

            <label htmlFor="region">Région</label>
            <Field type="text" name="region" />
            <ErrorMessage name="region" />

            <label htmlFor="codePostal">Code postal</label>
            <Field type="text" name="codePostal" />
            <ErrorMessage name="codePostal" />

            <label htmlFor="siteWeb">Site web (optional)</label>
            <Field type="text" name="siteWeb" />
            <ErrorMessage name="siteWeb" />

            <label htmlFor="photo">Photo de profil (importer)</label>
            <Field type="file" name="photo" />
            <ErrorMessage name="photo" />

            <button type="submit" disabled={isSubmitting} style={{ backgroundColor: "#D4AD6B" }}>
              S'inscrire
            </button>
            <button type="button" disabled={isSubmitting} onClick={() => {}} style={{ backgroundColor: "#D4AD6B" }}>
              Annuler
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
