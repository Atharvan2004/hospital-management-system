import { Schema, model } from "mongoose";


const staffSchema = new Schema({
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
  userID: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  shiftTimings: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

const Staff = model("Staff", staffSchema);

// const sampleStaffData = {
//   name: "Bob Smith",
//   address: "456 Oak Street, Cityville",
//   age: 32,
//   contact: {
//     phone: "123-456-7890",
//     email: "bob.smith@example.com",
//   },
//   userID: "bob_staff",
//   password: "securepass456",
//   shiftTimings: "9:00 AM - 5:00 PM",
//   salary: 75000,
//   sex: "Male",
// };

// Staff.insertMany(sampleStaffData)
//   .then((result) => {
//     console.log("Documents inserted:", result);
//   })
//   .catch((error) => {
//     console.error("Error inserting documents:", error);
//   });

export default Staff;
