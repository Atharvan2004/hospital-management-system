import React, { useState } from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom/dist';
import baseURL from 'port';


function Appointment() {
  // Extracting parameters from the URL
  const { id } = useParams();
  const navigate= useNavigate();

  // Getting current user data from Redux store
  const { currentUser } = useSelector((state) => state.patient);

  // State to manage appointment form data
  const [appointment, setAppointment] = useState({
    patientID: currentUser._id,
    contact: {
      phone: "",
      email: "",
    },
    doctorID: id,
    time: "",
    date: "",
    status: "Pending",
    token:localStorage.getItem("token"),
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Use spread operator to update nested state
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setAppointment(prevAppointment => ({
        ...prevAppointment,
        [parent]: {
          ...prevAppointment[parent],
          [child]: value
        }
      }));
    } else {
      // If not nested, update directly
      setAppointment(prevAppointment => ({
        ...prevAppointment,
        [name]: value
      }));
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, e.g., save to database
    console.log('Form submitted:', appointment);
  
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  
    try {
      const response = await axios.post(
        `${baseURL}/bookAppointment/${id}`,
        appointment,
        config
      );

      
      // Reset form fields
      setAppointment({
        patientID: currentUser._id,
        contact: {
          phone: "",
          email: "",
        },
        doctorID: id,
        time: "",
        date: "",
        status: "Pending",
      });

      navigate("/patient-dash");
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };
 
  return (
    <Card
      color="transparent"
      shadow={false}
      className="mx-auto w-full border mt-4 py-3 mb-40"
    >
      {/* Title */}
      <Typography variant="h4" color="blue-gray" className="mx-auto">
        Appointment
      </Typography>
      {/* Description */}
      <Typography color="gray" className="mt-1 font-normal mx-auto">
        Nice to meet you! Enter your details to get an Appointment
      </Typography>
      {/* Appointment Form */}
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <div className="mb-1 flex flex-col gap-6">
          {/* Contact Phone */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Contact Phone
          </Typography>
          <Input
            size="lg"
            placeholder="Contact Phone"
            value={appointment.contact.phone}
            onChange={handleChange}
            name="contact.phone"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {/* Contact Email */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Contact Email
          </Typography>
          <Input
            size="lg"
            placeholder="Contact Email"
            value={appointment.contact.email}
            onChange={handleChange}
            name="contact.email"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {/* Time */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Time
          </Typography>
          <Input
            size="lg"
            placeholder="Time"
            value={appointment.time}
            onChange={handleChange}
            name="time"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {/* Date */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Date
          </Typography>
          <Input
            size="lg"
            type='date'
            placeholder="Date"
            value={appointment.date}
            onChange={handleChange}
            name="date"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        {/* Submit Button */}
        <Button
          type="submit"
          className="mt-6"
          color="blue" 
          
          fullWidth
        >
          Submit Appointment
        </Button>
      </form>
    </Card>
  );
}

export default Appointment;
