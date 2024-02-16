import { asyncErrorHandler } from "../middleware/asyncErrorHandler.js";
import { findPatientByQuery } from "../utils/findPatient.js";
import Patient from "../models/patient.js";
import MedicalReport from "../models/report.js";

const editPatient = asyncErrorHandler(async (req, res) => {
  if (req.authenticated) {
    try {
      const patientId = req.params.id;
      const updatedPatientData = {};
      if (req.body.formData.name) {
        updatedPatientData.name = req.body.formData.name;
      }
      if (req.body.formData.address) {
        updatedPatientData.address = req.body.formData.address;
      }
      if (req.body.formData.age) {
        updatedPatientData.age = req.body.formData.age;
      }
      if (req.body.formData.phone) {
        // updatedPatientData.contact = updatedPatientData.contact || {};
        updatedPatientData.contact.phone = req.body.formData.phone;
      }
      if (req.body.formData.email) {
        // updatedPatientData.contact.email = updatedPatientData.contact || {};
        updatedPatientData.contact.email = req.body.formData.email;
      }
      if (req.body.formData.bloodGroup) {
        updatedPatientData.bloodGroup = req.body.formData.bloodGroup;
      }
      if (req.body.formData.sex) {
        updatedPatientData.sex = req.body.formData.sex;
      }
      if (req.body.formData.userid) {
        updatedPatientData.userid = req.body.formData.userid;
      }
      if (req.body.formData.password) {
        updatedPatientData.password = req.body.formData.password;
      }
      const updatedPatient = await Patient.findOneAndUpdate(
        { _id: patientId },
        { $set: updatedPatientData },
        { new: true }
      ).catch((err) => {
        console.error(err);
        res.status(400).json({ success: false, err: err.message });
      });

      if (!updatedPatient) {
        return res
          .status(404)
          .json({ success: false, message: "Patient not found" });
      }

      res.json({
        success: true,
        message: "Patient data updated",
        data: updatedPatient,
      });
    } catch (err) {
      console.error(err);
      res.status(400).json({ success: false, err: err.message });
    }
  } else {
    res.status(300).json({
      message: "Not authenticated, please login",
    });
  }
});

const getReport = asyncErrorHandler(async (req, res) => {
  if (req.authenticated) {
    const reportId = req.params.id;
    try {
      const report = await MedicalReport.findById(reportId);
      res.status(200).json({
        report: report,
      });
    } catch (error) {
      throw Error(error);
    }
  } else {
    res.status(300).json({
      message: "Not authenticated, please login",
    });
  }
});

const getReportList = asyncErrorHandler(async (req, res) => {
  if (req.authenticated) {
    const patientId = req.user.id;

    try {
      const patient = await Patient.findById(patientId);
      console.log(patient.reports + " a a");
      const reportPromises = patient.reports.map(async (reportId, index) => {
        console.log("Report Id " + index + " :" + reportId);
        const r = await MedicalReport.findById(reportId);
        return r;
      });
      const reportList = await Promise.all(reportPromises);
      res.status(200).json({
        reportList: reportList,
      });
    } catch (error) {
      throw Error(error);
    }
  } else {
    res.status(300).json({
      message: "Not authenticated, please login",
    });
  }
});

export { editPatient, getReport, getReportList };
