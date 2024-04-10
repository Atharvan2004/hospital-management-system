import { findByQuery } from "../utils/findPatient.js";
import { asyncErrorHandler } from "../middleware/asyncErrorHandler.js";
import Patient from "../models/patient.js";
import Doctor from "../models/doctor.js";
import Staff from "../models/staff.js";
import { comparePass } from "../utils/encryption.js";
import { generateToken } from "../utils/genToken.js";
import mongoose, { mongo } from "mongoose";
import Admin from "../models/admin.js";

const models = [Patient, Doctor, Staff, Admin];

const searchPatients = asyncErrorHandler(async (req, res) => {
  try {
    const query = req.body.query;
    const model = req.body.model;
    const patientList = await findByQuery(query, model).catch((err) => {
      console.log(err);
    });
    console.log(patientList);
    if (patientList != null) {
      res.status(201).json({
        success: true,
        patientList,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "No patients found",
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      err,
    });
  }
});

const getPatient = asyncErrorHandler(async (req, res) => {
  try {
    const patientID = req.params.id;
    const patient = await Patient.findById(patientID).catch((err) => {
      throw Error(err.message);
    });
    if (patient != null) {
      res.status(201).json({
        success: true,
        patient: patient,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Patient not found",
      });
    }
  } catch (err) {
    throw Error(err.message);
  }
});

const loginUser = asyncErrorHandler(async (req, res, next) => {
  const userId = req.body.userId;
  const password = req.body.password;
  const role = req.body.role;
  const model = mongoose.model(role);
  console.log("hi");
  console.log(model);
  if (model) {
    const user = await model.findOne({ userId: userId });
    if (!user) {
      res.status(404).json("User not found");
      return;
    }
    const hashedPass = user.password;
    const isCorrect = await comparePass(password, hashedPass).catch((err) => {
      res.json(err);
      next(err);
    });
    if (isCorrect) {
      const token = await generateToken(user, role);
      // console.log("token :: "+token)

      res
        .status(200)
        .json({ message: "Successfully logged in", user: user, token: token });
    } else {
      res.status(400).json("Incorrect Password");
    }
  } else {
    res.status(400).json("Invalid role");
  }
});

const loginAdmin = asyncErrorHandler(async (req, res, next) => {
  const userId = req.body.userId;
  const password = req.body.password;
  const role = "Admin";

  const user = await Admin.findOne({ userId: userId }).catch((e) => {
    res.status(404).json("error  " + e);
  });
  if (!user) {
    res.status(404).json("Admin not found");
    return;
  }
  if (password === user.password) {
    const token = await generateToken(user, role);
    res.cookie("token", token, {
      maxAge: 60 * 60 * 6 * 1000,
    });
    console.log(user);
    res.status(200).json({ message: "Successfully logged in", user: user });
  } else {
    res.status(300).json({ message: "Incorrect password" });
  }
});

const viewProfile = asyncErrorHandler(async (req, res) => {
  const b = [];
  let a;
  if (req.authenticated) {
    const id = req.user.id;
    for (let index = 0; index < models.length; index++) {
      a = await models[index].findById(id);
      if (a != null) {
        b.push(a);
        break;
      }
    }
    // console.log(b[0] + " asdf");
    if (b.length > 0) {
      res.status(201).json({
        profile: b,
      });
    } else {
      res.status(400).json({
        message: "User not found",
      });
    }
  } else {
    res.status(300).json({
      message: "Not authenticated, please login",
    });
  }
});

const getDoctors = asyncErrorHandler(async (req, res) => {
  try {
    const doctorList = await Doctor.find().catch((err) => {
      console.log(err);
    });
    console.log(doctorList);
    if (doctorList != null) {
      res.status(201).json({
        success: true,
        doctorList,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "No patients found",
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      err,
    });
  }
});

export {
  searchPatients,
  getPatient,
  loginUser,
  viewProfile,
  loginAdmin,
  getDoctors,
};
