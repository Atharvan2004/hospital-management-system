import { Schema, model } from "mongoose";
import {conn} from "./conn.js"

await conn();
const doctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  contact: {
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
  },
  specialisation: {
    type: String,
    required: true,
  },
  officeNo: {
    type: String,
  },
  patientID: [
    {
      id: {
        type: Schema.Types.ObjectId,
        ref: "Patient",
      },
      _id: false,
    },
  ],
  doctorUsername: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  shiftTiming: {
    type: String,
    required: true,
  },
});

const Doctor = model("Doctor", doctorSchema);

const sampleDoctor = {
  name: "Dr. Sarah Smith",
  address: "456 Health Street, Townsville",
  age: 42,
  sex: "Female",
  contact: {
    phone: "987-654-3210",
    email: "sarah.smith@example.com",
  },
  specialisation: "Pediatrics",
  officeNo: "B202",
  patientID: [],
  doctorUsername: "sarah_smith",
  password: "securepassword456",
  salary: 110000,
  shiftTiming: "10:00 AM - 6:00 PM",
};

Doctor.insertMany(sampleDoctor)
      .then((result) => {
          console.log('Documents inserted:', result);
      })
      .catch((error) => {
          console.error('Error inserting documents:', error);
      });

export default Doctor;
