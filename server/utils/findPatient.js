import Patient from "../models/patients.js";

async function findPatientByQuery(query) {
  try {
    let patients = 0;
    const regexQuery = {
      $or: [{ name: { $regex: new RegExp(query, "i") } }],
    };

    patients = await Patient.find(regexQuery);

    // Check if the product was found
    if (patients.length == 0) {
      return;
    } else return patients;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { findPatientByQuery };
