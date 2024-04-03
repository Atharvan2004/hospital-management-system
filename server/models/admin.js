import { Schema, model } from "mongoose";

const adminSchema = new Schema({
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Admin = model("admin", adminSchema);

// const sampleAdmin = {
//   phone: "555-123-4567",
//   email: "admin@example.com",
//   userId: "admin",
//   password: "admin",
// };

// Admin
//   .insertMany(sampleAdmin)
//   .then((result) => {
//     console.log("Documents inserted:", result);
//   })
//   .catch((error) => {
//     console.error("Error inserting documents:", error);
//   });

export default Admin;
