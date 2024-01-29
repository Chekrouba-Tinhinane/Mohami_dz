import React from "react";
import { useFormik } from "formik";
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import axios from "axios";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";

const initialValues = {
  DateInterval: "",
  HeureDebut: null,
  HeureFin: null,
  NbrMaxRdv: "",
  id_avocat: 1
};

const validate = (values) => {
  const errors = {};
  if (!values.DateInterval) {
    errors.DateInterval = "Date is required";
  }
  if (!values.HeureDebut) {
    errors.HeureDebut = "Start time is required";
  }
  if (!values.HeureFin) {
    errors.HeureFin = "End time is required";
  }
  if (!values.NbrMaxRdv) {
    errors.NbrMaxRdv = "Max appointments is required";
  } else if (isNaN(values.NbrMaxRdv)) {
    errors.NbrMaxRdv = "Max appointments must be a number";
  }
  return errors;
};

const AvailabilityForm = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: async (values) => {
      try {
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
    <Container maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Select a Date</Typography>
            <TextField
              id="DateInterval"
              name="DateInterval"
              type="date"
              fullWidth
              value={formik.values.DateInterval}
              onChange={formik.handleChange}
              error={formik.touched.DateInterval && Boolean(formik.errors.DateInterval)}
              helperText={formik.touched.DateInterval && formik.errors.DateInterval}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel id="start-time-label">Start Time</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="Start Time"
                id="HeureDebut"
                name="HeureDebut"
                value={formik.values.HeureDebut}
                onChange={(date) => formik.setFieldValue("HeureDebut", date)}
                renderInput={(params) => <TextField {...params} fullWidth />}
                error={formik.touched.HeureDebut && Boolean(formik.errors.HeureDebut)}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <InputLabel id="end-time-label">End Time</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                label="End Time"
                id="HeureFin"
                name="HeureFin"
                value={formik.values.HeureFin}
                onChange={(date) => formik.setFieldValue("HeureFin", date)}
                renderInput={(params) => <TextField {...params} fullWidth />}
                error={formik.touched.HeureFin && Boolean(formik.errors.HeureFin)}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="NbrMaxRdv"
              name="NbrMaxRdv"
              label="Max Appointments"
              fullWidth
              value={formik.values.NbrMaxRdv}
              onChange={formik.handleChange}
              error={formik.touched.NbrMaxRdv && Boolean(formik.errors.NbrMaxRdv)}
              helperText={formik.touched.NbrMaxRdv && formik.errors.NbrMaxRdv}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AvailabilityForm;
