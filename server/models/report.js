import { Schema, model } from "mongoose";

const medicalReportSchema = new Schema({

  patientID: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctorID: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  reportDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  chiefComplaint: {
    type: String,
    required: true,
  },
  symptoms: [
    {
      type: String,
      required: true,
    },
  ],
  tests: [
    {
      type: String,
    },
  ],
  diagnosis: {
    type: String,
    required: true,
  },
  medications: [
    {
      type: String,
    },
  ],
  followUpInstructions: {
    type: String,
  },
  treatmentDuration: {
    type: String,
  },
});

const MedicalReport = model("MedicalReport", medicalReportSchema);

// const sampleMedicalReport = {
//   patientID: "65af889ebd51bb4825b06d5b",
//   doctorID: "65af8fb0395615960b093f97",
//   reportDate: new Date(),
//   chiefComplaint: "Cough and Fever",
//   symptoms: ["Persistent cough", "high fever"],
//   tests: ["Blood test", "X-ray"],
//   diagnosis: "Upper respiratory tract infection",
//   medications: ["Combiflam", "Azithromycin"],
//   followUpInstructions: "Take medications as prescribed and follow up after one week",
//   treatmentDuration: "1 week",
// };

// MedicalReport.insertMany(sampleMedicalReport)
//   .then((result) => {
//     console.log("Documents inserted:", result);
//   })
//   .catch((error) => {
//     console.error("Error inserting documents:", error);
//   });

export default MedicalReport;
