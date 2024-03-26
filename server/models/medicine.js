import { Schema, model } from "mongoose";

const medicineSchema = new Schema({
  name: String,
  price: Number,
  type: [String],
  count: Number,
});

const Medicine = model("Medicine", medicineSchema);

// const sMedicine = {
//   name: "Paracetomol",
//   price: 20,
//   type: ["Analgesic", "Antipyretic"],
//   count: 120,
// };

// Medicine.insertMany(sMedicine)
//   .then((result) => {
//     console.log("Documents inserted:", result);
//   })
//   .catch((error) => {
//     console.error("Error inserting documents:", error);
//   });

export default Medicine;
