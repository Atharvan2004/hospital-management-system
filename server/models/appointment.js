import { Schema, model } from "mongoose";

const appointmentSchema = new Schema({
  patientID: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
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
  doctorID: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },
  time: String,
  date:Date,
  status: {
    type: String,
    default: "Pending",
  },
});

const Appointment = model("Appointment", appointmentSchema);

// const sampleappointment = {
//   patientID: "60f7890c6d9f1d40385c4d7a", // Sample patient ID
//   contact: {
//     phone: "1234567890", // Sample phone number
//     email: "example@example.com", // Sample email
//   },
//   doctorID: "60f7890c6d9f1d40385c4d7b", // Sample doctor ID
//   time: "10:00:00 am",
//   date:"2024-05-11", // Sample appointment time
//   status: "Pending", // Default status
// };

// Appointment.insertMany(sampleappointment)
//       .then((result) => {
//           console.log('Documents inserted:', result);
//       })
//       .catch((error) => {
//           console.error('Error inserting documents:', error);
//       });

export default Appointment;
