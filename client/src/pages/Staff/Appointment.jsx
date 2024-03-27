import React, { useState } from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

function Appointment() {
  const [appointmentDetails, setAppointmentDetails] = useState({
    patientID: '',
    contact: {
      phone: '',
      email: '',
    },
    doctorID: '',
    time: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("contact.")) {
      const contactField = name.split(".")[1];
      setAppointmentDetails(prevDetails => ({
        ...prevDetails,
        contact: {
          ...prevDetails.contact,
          [contactField]: value
        }
      }));
    } else {
      setAppointmentDetails(prevDetails => ({
        ...prevDetails,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., save to database
    console.log('Form submitted:', appointmentDetails);
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="mx-auto w-full border mt-4 py-3 mb-40"
    >
      <Typography variant="h4" color="blue-gray" className="mx-auto">
        Appointment
      </Typography>
      <Typography color="gray" className="mt-1 font-normal mx-auto">
        Nice to meet you! Enter your details to get an Appointment
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <div className="mb-1 flex flex-col gap-6">
          {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
            Patient ID
          </Typography>
          <Input
            size="lg"
            placeholder="Patient ID"
            value={appointmentDetails.patientID}
            onChange={handleChange}
            name="patientID"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          /> */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Contact Phone
          </Typography>
          <Input
            size="lg"
            placeholder="Contact Phone"
            value={appointmentDetails.contact.phone}
            onChange={handleChange}
            name="contact.phone"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Contact Email
          </Typography>
          <Input
            size="lg"
            placeholder="Contact Email"
            value={appointmentDetails.contact.email}
            onChange={handleChange}
            name="contact.email"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
            Doctor ID
          </Typography>
          <Input
            size="lg"
            placeholder="Doctor ID"
            value={appointmentDetails.doctorID}
            onChange={handleChange}
            name="doctorID"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          /> */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Time
          </Typography>
          <Input
            size="lg"
            placeholder="Time"
            value={appointmentDetails.time}
            onChange={handleChange}
            name="time"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Date
          </Typography>
          <Input
            size="lg"
            placeholder="Date"
            value={appointmentDetails.date}
            onChange={handleChange}
            name="date"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Button
          type="submit"
          className="mt-6"
          color="lightBlue"
          ripple="light"
          fullWidth
        >
          Submit Appointment
        </Button>
      </form>
    </Card>
  );
}

export default Appointment;