import React, { useEffect, useState } from "react";
import { Card, Typography, Button } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MedicalReport = () => {
  const { id } = useParams();
  const [report, setReport] = useState(null); // Initialize to null instead of []

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post(
          `http://localhost:3000/getReport/${id}`,
          {
            token: localStorage.getItem("token"),
          }
        );
        setReport(response.data.report);
      } catch (error) {
        console.error("Error fetching report: ", error);
      }
    }
    fetchData();
  }, [id]); // Include id in the dependency array

  if (!report) {
    // Render loading state while waiting for report
    return <div>Loading...</div>;
  }
  const {
    _id,
    patientID,
    doctorID,
    reportDate,
    chiefComplaint,
    symptoms,
    tests,
    diagnosis,
    medications,
    followUpInstructions,
    treatmentDuration,
  } = report;

  return (
    <div className="container mx-auto px-4 mt-8 mb-24">
      <Card className="border w-3/5 mx-auto">
        <div className="p-6 mx-auto">
          <Typography color="blue-gray" className="mx-auto px-4 py-6" variant="h3" >
            Medical Report
          </Typography>
          <div className="mb-4">
            <Typography color="blue-gray" className="font-semibold">
              Report ID:
            </Typography>
            <Typography color="gray">{_id}</Typography>
          </div>
          <div className="mb-4">
            <Typography color="blue-gray" className="font-semibold">
              Patient ID:
            </Typography>
            <Typography color="gray">{patientID}</Typography>
          </div>
          <div className="mb-4">
            <Typography color="blue-gray" className="font-semibold">
              Doctor ID:
            </Typography>
            <Typography color="gray">{doctorID}</Typography>
          </div>
          <div className="mb-4">
            <Typography color="blue-gray" className="font-semibold">
              Report Date:
            </Typography>
            <Typography color="gray">
              {new Date(reportDate).toLocaleString()}
            </Typography>
          </div>
          <div className="mb-4">
            <Typography color="blue-gray" className="font-semibold">
              Chief Complaint:
            </Typography>
            <Typography color="gray">{chiefComplaint}</Typography>
          </div>
          <div className="mb-4">
            <Typography color="blue-gray" className="font-semibold">
              Symptoms:
            </Typography>
            <ul className="list-disc pl-6">
              {symptoms.map((symptom, index) => (
                <li key={index}>{symptom}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <Typography color="blue-gray" className="font-semibold">
              Tests:
            </Typography>
            <ul className="list-disc pl-6">
              {tests.map((test, index) => (
                <li key={index}>{test}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <Typography color="blue-gray" className="font-semibold">
              Diagnosis:
            </Typography>
            <Typography color="gray">{diagnosis}</Typography>
          </div>
          <div className="mb-4">
            <Typography color="blue-gray" className="font-semibold">
              Medications:
            </Typography>
            <ul className="list-disc pl-6">
              {medications.map((medication, index) => (
                <li key={index}>{medication}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <Typography color="blue-gray" className="font-semibold">
              Follow-up Instructions:
            </Typography>
            <Typography color="gray">{followUpInstructions}</Typography>
          </div>
          <div className="mb-4">
            <Typography color="blue-gray" className="font-semibold">
              Treatment Duration:
            </Typography>
            <Typography color="gray">{treatmentDuration}</Typography>
          </div>
          
        </div>
      </Card>
    </div>
  );
};

export default MedicalReport;
