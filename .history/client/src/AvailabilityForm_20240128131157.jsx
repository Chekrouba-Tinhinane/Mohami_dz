import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { TextField, Button, Grid, Typography } from "@mui/material";

const initialValues = {
  DateInterval: "",
  HeureDebut: "",
  HeureFin: "",
  NbrMaxRdv: "",
  id_avocat: 1,
};

const validate = (values) => {
  const errors = {};
  if (!values.DateInterval) {
    errors.DateInterval = "La date est requise";
  }
  if (!values.HeureDebut) {
    errors.HeureDebut = "L'heure de début est requise";
  }
  if (!values.HeureFin) {
    errors.HeureFin = "L'heure de fin est requise";
  }
  if (!values.NbrMaxRdv) {
    errors.NbrMaxRdv = "Le nombre maximum de rendez-vous est requis";
  } else if (isNaN(values.NbrMaxRdv)) {
    errors.NbrMaxRdv = "Le nombre maximum de rendez-vous doit être un nombre";
  }
  return errors;
};

const AvailabilityForm = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values) => {
      try {
        console.log("hey");
        const response = await axios.post(
          "http://192.168.137.210:8000/creneau/add_creneau",
          values
        );
        console.log("Response:", response.data);
        // Handle success response
      } catch (error) {
        console.error("Error:", error);
        // Handle error response
      }
    },
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="DateInterval">Sélectionnez une date :</label>
            <TextField
              fullWidth
              id="DateInterval"
              name="DateInterval"
              type="date"
              value={formik.values.DateInterval}
              onChange={formik.handleChange}
              error={
                formik.touched.DateInterval &&
                Boolean(formik.errors.DateInterval)
              }
              helperText={
                formik.touched.DateInterval && formik.errors.DateInterval
              }
            />
          </div>

          <div>
            <label htmlFor="HeureDebut">Heure de début :</label>
            <TextField
              fullWidth
              id="HeureDebut"
              name="HeureDebut"
              type="time"
              value={formik.values.HeureDebut}
              onChange={formik.handleChange}
              inputProps={{ step: 3600 }} // Limit to hours only
              error={
                formik.touched.HeureDebut && Boolean(formik.errors.HeureDebut)
              }
              helperText={formik.touched.HeureDebut && formik.errors.HeureDebut}
            />
          </div>

          <div>
            {" "}
            <label htmlFor="HeureFin">Heure de fin :</label>
            <TextField
              fullWidth
              id="HeureFin"
              name="HeureFin"
              type="time"
              value={formik.values.HeureFin}
              onChange={formik.handleChange}
              inputProps={{ step: 3600 }} // Limit to hours only
              error={formik.touched.HeureFin && Boolean(formik.errors.HeureFin)}
              helperText={formik.touched.HeureFin && formik.errors.HeureFin}
            />
          </div>

          <div>
            <TextField
              fullWidth
              id="NbrMaxRdv"
              name="NbrMaxRdv"
              label="Max Appointments"
              type="number"
              value={formik.values.NbrMaxRdv}
              onChange={formik.handleChange}
              error={
                formik.touched.NbrMaxRdv && Boolean(formik.errors.NbrMaxRdv)
              }
              helperText={formik.touched.NbrMaxRdv && formik.errors.NbrMaxRdv}
            />
          </div>

          <button
            className=" hover:bg-opacity-70 bg-primary px-3 py-2 text-white font-semibold rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </Grid>
    </Grid>
  );
};

export default AvailabilityForm;
