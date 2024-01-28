import React from "react";
import { useFormik } from "formik";
import axios from "axios";

const initialValues = {
  DateInterval: "",
  HeureDebut: "",
  HeureFin: "",
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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="DateInterval">Select a Date</label>
        <input
          id="DateInterval"
          name="DateInterval"
          type="date"
          value={formik.values.DateInterval}
          onChange={formik.handleChange}
        />
        {formik.errors.DateInterval && <div>{formik.errors.DateInterval}</div>}

        <label htmlFor="HeureDebut">Start Time</label>
        <input
          id="HeureDebut"
          name="HeureDebut"
          type="time"
          value={formik.values.HeureDebut}
          onChange={formik.handleChange}
        />
        {formik.errors.HeureDebut && <div>{formik.errors.HeureDebut}</div>}

        <label htmlFor="HeureFin">End Time</label>
        <input
          id="HeureFin"
          name="HeureFin"
          type="time"
          value={formik.values.HeureFin}
          onChange={formik.handleChange}
        />
        {formik.errors.HeureFin && <div>{formik.errors.HeureFin}</div>}

        <label htmlFor="NbrMaxRdv">Max Appointments</label>
        <input
          id="NbrMaxRdv"
          name="NbrMaxRdv"
          type="number"
          value={formik.values.NbrMaxRdv}
          onChange={formik.handleChange}
        />
        {formik.errors.NbrMaxRdv && <div>{formik.errors.NbrMaxRdv}</div>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AvailabilityForm;
