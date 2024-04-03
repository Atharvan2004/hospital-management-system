import { generateToken } from "../utils/genToken.js";
import { encrypt } from "../utils/encryption.js";
import { asyncErrorHandler } from "../middleware/asyncErrorHandler.js";
import Doctor from "../models/doctor.js";
import Patient from "../models/patient.js";
import Staff from "../models/staff.js";

const registerDoctor = asyncErrorHandler(async (req, res, next) => {
    const { name, address, age, sex, phone,email, specialisation, officeNo, userId, password, salary, status, shiftTiming } = req.body.formData;

    const hashedPassword = await encrypt(password);

    const newDoctor = new Doctor({
        name,
        address,
        age,
        sex,
        phone,
        email,
        specialisation,
        officeNo,
        patientID: [],
        userId,
        password: hashedPassword,
        salary,
        status,
        shiftTiming
    });

    await newDoctor.save().then(() => {
        const token = generateToken(newDoctor,"Doctor");
        res.cookie("token", token, {
            maxAge: 60 * 60 * 6 * 1000,
        });
        res.status(200).json("Successfully created Doctor");
    }).catch((err) => {
        res.status(400).json("Error in creating doctor: " + err);
        next(err);
    });
});

const registerPatient = asyncErrorHandler(async (req, res, next) => {
    const { name, address, age, phone,email, bloodGroup, sex, userId, password } = req.body.formData;

    const hashedPassword = await encrypt(password);

    const newPatient = new Patient({
        name,
        address,
        age,
        phone,
        email,
        bloodGroup,
        sex,
        userId,
        password: hashedPassword,
        reports: [],
    });

    await newPatient.save().then(() => {
        const token = generateToken(newPatient,"Patient");
        res.cookie("token", token, {
            maxAge: 60 * 60 * 6 * 1000,
        });
        res.status(200).json("Successfully created Patient");
    }).catch((err) => {
        res.status(400).json("Error in creating patient: " + err);
        next(err);
    });
});

const registerStaff = asyncErrorHandler(async (req, res, next) => {
    const { name, address, age, phone,email, userId, password, shiftTimings, salary, sex } = req.body.formData;

    const hashedPassword = await encrypt(password);

    const newStaffMember = new Staff({
        name,
        address,
        age,
        phone,
        email,
        userId,
        password: hashedPassword,
        shiftTimings,
        salary,
        sex,
    });

    await newStaffMember.save().then(() => {
        const token = generateToken(newStaffMember,"Staff");
        res.cookie("token", token, {
            maxAge: 60 * 60 * 6 * 1000,
        });
        res.status(200).json("Successfully created Staff");
    }).catch((err) => {
        res.status(400).json("Error in creating staff member: " + err);
        next(err);
    });
});

export {registerDoctor,registerPatient,registerStaff}