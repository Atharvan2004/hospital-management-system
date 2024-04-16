import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios"; // Import axios for making HTTP requests
import baseURL from "../../../port";

function Report() {
  const { id } = useParams();
  const { currentUser, loading, error } = useSelector((state) => state.doctor);
  const [reportDetails, setReportDetails] = useState({
    patientID: id,
    doctorID: currentUser._id,
    chiefComplaint: "",
    symptoms: [],
    tests: [],
    diagnosis: "",
    medications: [],
    followUpInstructions: "",
    treatmentDuration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "symptoms" || name === "tests" || name === "medications") {
      // Splitting the input value by comma and trimming each item
      const itemsArray = value.split(",").map((item) => item.trim());
      setReportDetails((prevDetails) => ({
        ...prevDetails,
        [name]: itemsArray,
      }));
    } else {
      setReportDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseURL}/newReport/${id}`, {
        formData:reportDetails,
        token:localStorage.getItem("token")
      });
      console.log("Report submitted successfully:", response.data);
      // Reset form fields
      setReportDetails({
        ...reportDetails,
        chiefComplaint: "",
        symptoms: [],
        tests: [],
        diagnosis: "",
        medications: [],
        followUpInstructions: "",
        treatmentDuration: "",
      });
    } catch (error) {
      console.error("Error submitting report:", error);
    }
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="mx-auto w-3/6 border mt-4 py-3 mb-40"
    >
      <Typography variant="h4" color="blue-gray" className="mx-auto">
        Patient Report
      </Typography>
      <Typography color="gray" className="mt-1 font-normal mx-auto">
        Fill out the patient report below
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Patient ID
          </Typography>
          <Input
            size="lg"
            placeholder="Patient ID"
            disabled
            value={reportDetails.patientID}
            onChange={handleChange}
            name="patientID"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Doctor ID
          </Typography>
          <Input
            size="lg"
            placeholder="Doctor ID"
            disabled
            value={reportDetails.doctorID}
            onChange={handleChange}
            name="doctorID"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Chief Complaint
          </Typography>
          <Input
            size="lg"
            placeholder="Chief Complaint"
            value={reportDetails.chiefComplaint}
            onChange={handleChange}
            name="chiefComplaint"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Symptoms (separated by commas)
          </Typography>
          <Input
            size="lg"
            placeholder="Symptoms"
            value={reportDetails.symptoms.join(", ")}
            onChange={handleChange}
            name="symptoms"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Tests (separated by commas)
          </Typography>
          <Input
            size="lg"
            placeholder="Tests"
            value={reportDetails.tests.join(", ")}
            onChange={handleChange}
            name="tests"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Medications (separated by commas)
          </Typography>
          <Input
            size="lg"
            placeholder="Medications"
            value={reportDetails.medications.join(", ")}
            onChange={handleChange}
            name="medications"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Diagnosis
          </Typography>
          <Input
            size="lg"
            placeholder="Diagnosis"
            value={reportDetails.diagnosis}
            onChange={handleChange}
            name="diagnosis"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Follow Up Instructions
          </Typography>
          <Input
            size="lg"
            placeholder="Follow Up Instructions"
            value={reportDetails.followUpInstructions}
            onChange={handleChange}
            name="followUpInstructions"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Treatment Duration
          </Typography>
          <Input
            size="lg"
            placeholder="Treatment Duration"
            value={reportDetails.treatmentDuration}
            onChange={handleChange}
            name="treatmentDuration"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />{" "}
        </div>{" "}
        <Button type="submit" className="mt-6 ml-24" color="black" ripple>
          Submit Report
        </Button>
      </form>
    </Card>
  );
}

export default Report;
