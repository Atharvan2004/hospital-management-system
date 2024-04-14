import { asyncErrorHandler } from "../middleware/asyncErrorHandler.js";
import Medicine from "../models/medicine.js";

const getMedicine = asyncErrorHandler(async (req, res) => {
  if (req.authenticated && req.user.role == "Staff") {
    try {
      const medicineList = await Medicine.find();
      res.json({
        success: true,
        data: medicineList,
      });
    } catch (err) {
      console.error(err);
      res.status(400).json({ success: false, err: err.message });
    }
  } else {
    res.status(400).json({ success: false, err: "Not a staff, please login" });
  }
});

const addMedicine = asyncErrorHandler(async (req, res) => {
  if (req.authenticated && req.user.role === "Staff") {
    try {
      const { name, price, type, count } = req.body.formData;

      const oldMed = await Medicine.findOne({ name: name });
      if (oldMed) {
        oldMed.count += count;
        oldMed.save();
        res.status(201).json({
          success: true,
          data: oldMed,
          message: "Medicine updated successfully",
        });
      } else {
        const newMedicine = new Medicine({
          name,
          price,
          type,
          count,
        });
        await newMedicine.save();
        res.status(201).json({
          success: true,
          data: newMedicine,
          message: "Medicine added successfully",
        });
      }
    } catch (err) {
      console.error(err);
      res.status(400).json({ success: false, err: err.message });
    }
  } else {
    res.status(400).json({ success: false, err: "Not a staff, please login" });
  }
});

// const newReciept = asyncErrorHandler(async (req, res) => {
//   if (req.authenticated && req.user.role === "Staff") {
//     try {
//       const { name, price, type, count } = req.body;

//       res.status(201).json({
//         success: true,
//         data: newMedicine,
//         message: "Medicine added successfully",
//       });
//     } catch (err) {
//       console.error(err);
//       res.status(400).json({ success: false, err: err.message });
//     }
//   } else {
//     res.status(400).json({ success: false, err: "Not a staff, please login" });
//   }
// });

export { getMedicine, addMedicine };
