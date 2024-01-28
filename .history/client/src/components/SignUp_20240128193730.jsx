import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [specialities, setSpecialities] = useState([]);

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
          langue: values.langue,
        },
        id_speciality: values.id_speciality,
      };
      console.log(postData);

      const response = await axios.post(
        "http://192.168.137.210:8000/avocat/register_avocat",
        postData
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error creating avocat:", error);
    }
  };

  return (
    <div className="flex flex-col w-full bg-lightBrown py-5">
      <div className="bg-white flex flex-col mx-[4rem] px-[3rem] py-[1.5rem]">
        <SignupForm
          specialities={specialities}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

const SignupForm = ({ onCancel, onSubmit, specialities }) => {
  const navigate = useNavigate()
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
    langue:""
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
          langue: "french",
          // Assuming default values for latitude, longitude, and langue
          latitude: 0,
          longitude: 0,
        },
        id_speciality: values.id_speciality,
      };
      console.log(postData);

      navigate("/SelfProfile")

      const response = await axios.post(
        "http://192.168.137.210:8000/avocat/register_avocat",
        postData
      );

      alert("Avocat created successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error creating avocat:", error);
    }
  };
  /*  const handleReset = () => {
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
    <div className="mx-auto w-[75%]">
      <h3 className="text-3xl tracking-wide font-semibold recursive">
        S'inscrire
      </h3>

      <Formik
        validationSchema={Yup.object({
          langue: Yup.string().required(""),
          first_name: Yup.string().required(""),
          last_name: Yup.string().required(""),
          email: Yup.string()
            .email("Invalid email address")
            .required(""),
          password: Yup.string()
            .min(8, "Must be at least 8 characters")
            .required(""),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required(""),
          telephone: Yup.string().required(""),
          ville: Yup.string().required(""),
          region: Yup.string().required(""),
          codepostal: Yup.string().required(""),
          siteweb: Yup.string().notRequired(),
          /*           photo: Yup.mixed().required("Required"),
           */ id_speciality: Yup.string().required(""),
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
          <Form className="space-y-[2rem]">
            <div className="flex space-x-[6rem]">
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

            <div className="flex space-x-[6rem]">
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
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700"
              >
                Photo de profil (importer)
              </label>
              <Field
                type="file"
                name="photo"
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
              <ErrorMessage name="photo" className="text-red-500 text-sm" />
            </div>

            <div>
              <Field
                onChange={handleChange}
                as={TextField}
                type="text"
                name="id_speciality"
                label="Choisir une spécialité"
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
                onChange={handleChange}
                as={TextField}
                type="text"
                name="langue"
                label="Langue"
                select
                className=" px-2 py-1 mt-1 w-full"
                variant="standard"
              >
                <option className="" value="french">Français</option>
                <option className="" value="arabic">Arabe</option>

                
              </Field>
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
