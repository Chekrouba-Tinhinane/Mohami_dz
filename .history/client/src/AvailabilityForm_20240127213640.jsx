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

const initialValues = {
  date: "",
  startTime: "",
  endTime: "",
  maxAppointments: "",
};

const validate = (values) => {
  const errors = {};
  if (!values.date) {
    errors.date = "Date is required";
  }
  if (!values.startTime) {
    errors.startTime = "Start time is required";
  }
  if (!values.endTime) {
    errors.endTime = "End time is required";
  }
  if (!values.maxAppointments) {
    errors.maxAppointments = "Max appointments is required";
  } else if (isNaN(values.maxAppointments)) {
    errors.maxAppointments = "Max appointments must be a number";
  }
  return errors;
};

const AvailabilityForm = () => {
  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      // Submit logic here
      console.log(values);
    },
  });

  return (
    <Container maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Select a Date</Typography>
            <TextField
              id="date"
              name="date"
              type="date"
              fullWidth
              value={formik.values.date}
              onChange={formik.handleChange}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel id="start-time-label">Start Time</InputLabel>
            <Select
              labelId="start-time-label"
              id="startTime"
              name="startTime"
              fullWidth
              value={formik.values.startTime}
              onChange={formik.handleChange}
              error={formik.touched.startTime && Boolean(formik.errors.startTime)}
            >
              <MenuItem value="">Select Start Time</MenuItem>
              {/* Add options for start time */}
            </Select>
          </Grid>
          <Grid item xs={6}>
            <InputLabel id="end-time-label">End Time</InputLabel>
            <Select
              labelId="end-time-label"
              id="endTime"
              name="endTime"
              fullWidth
              value={formik.values.endTime}
              onChange={formik.handleChange}
              error={formik.touched.endTime && Boolean(formik.errors.endTime)}
            >
              <MenuItem value="">Select End Time</MenuItem>
              {/* Add options for end time */}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="maxAppointments"
              name="maxAppointments"
              label="Max Appointments"
              fullWidth
              value={formik.values.maxAppointments}
              onChange={formik.handleChange}
              error={formik.touched.maxAppointments && Boolean(formik.errors.maxAppointments)}
              helperText={formik.touched.maxAppointments && formik.errors.maxAppointments}
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
