import Patient from "../models/patient.js";
import Doctor from "../models/doctor.js";
import Staff from "../models/staff.js";

const models = {
  Patient,
  Doctor,
  Staff,
};

async function findByQuery(query, modelIndex) {
  try {
    const model = models[modelIndex];
    let patients = 0;
    const regexQuery = {
      $or: [{ name: { $regex: new RegExp(query, "i") } }],
    };

    patients = await model.find(regexQuery);
    if (patients.length == 0) {
      return patients;
    } else return patients;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { findByQuery };
