import React, { useState } from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

function Report() {
  const [reportDetails, setReportDetails] = useState({
    patientID:'',
      doctorID:'',
      reportDate:'',
      chiefComplaint:"",
      symptoms:'',
      tests:'',
      diagnosis: '',
      Prescription: '',
      followUpInstructions: '',
      treatmentDuration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., save to database
    console.log('Form submitted:', reportDetails);
    // Reset form fields
    setReportDetails({
      patientID:'',
      doctorID:'',
      reportDate:'',
      chiefComplaint:"",
      symptoms:'',
      tests:'',
      diagnosis: '',
      Prescription: '',
      followUpInstructions: '',
      treatmentDuration: '',
    });
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="mx-auto w-full border mt-4 py-3 mb-40"
    >
      <Typography variant="h4" color="blue-gray" className="mx-auto">
        Patient Report
      </Typography>
      <Typography color="gray" className="mt-1 font-normal mx-auto">
        Fill out the patient report below
      </Typography>
      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <div className="mb-1 flex flex-col gap-6">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
            Patient ID
          </Typography>
          <Input
            size="lg"
            placeholder="Patient ID"
            value={reportDetails.patientID}
            onChange={handleChange}
            name="patientID"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
            Patient Name
          </Typography>
          <Input
            size="lg"
            placeholder="Patient Name"
            value={reportDetails.patientName}
            onChange={handleChange}
            name="patientName"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          /> */}
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Doctor ID
          </Typography>
          <Input
            size="lg"
            placeholder="Doctor ID"
            value={reportDetails.doctorID}
            onChange={handleChange}
            name="doctorID"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Report Date
          </Typography>
          <Input
            size="lg"
            placeholder="Date"
            value={reportDetails.reportDate}
            onChange={handleChange}
            name="reportDate"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Chief Complaint
          </Typography>
          <Input
            size="lg"
            placeholder="chiefComplaint"
            value={reportDetails.chiefComplaint}
            onChange={handleChange}
            name="chiefComplaint"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Symptoms
          </Typography>
          <Input
            size="lg"
            placeholder="symptoms"
            value={reportDetails.symptoms}
            onChange={handleChange}
            name="symptoms"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Tests
          </Typography>
          <Input
            size="lg"
            placeholder="Tests"
            value={reportDetails.tests}
            onChange={handleChange}
            name="tests"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Diagnosis
          </Typography>
          <Input
            size="lg"
            placeholder="Diagnosis"
            value={reportDetails.diagnosis}
            onChange={handleChange}
            name="diagnosis"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Prescription
          </Typography>
          <Input
            size="lg"
            placeholder="Prescription"
            value={reportDetails.prescription}
            onChange={handleChange}
            name="prescription"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Follow Up Instructions
          </Typography>
          <Input
            size="lg"
            placeholder="follow Up Instructions"
            value={reportDetails.followUpInstructions}
            onChange={handleChange}
            name="followUpInstructions"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
          Treatment Duration
          </Typography>
          <Input
            size="lg"
            placeholder="Treatment Duration"
            value={reportDetails.treatmentDuration}
            onChange={handleChange}
            name="treatmentDuration"
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
          Submit Report
        </Button>
      </form>
    </Card>


  );
}




export default Report;

// import React from 'react';
// import { Card, Typography } from "@material-tailwind/react";
// import styled, { keyframes } from 'styled-components';
// import leftImage from '../../assets/left-image.jpg'; // Path to your left image
// import rightImage from '../../assets/right-image.jpg'; // Path to your right image

// const fadeInAnimation = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(-20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const AnimatedCard = styled(Card)`
//   animation: ${fadeInAnimation} 0.5s ease-in-out;
//   background-color: rgba(255, 255, 255, 0.8); /* White color with opacity */
//   border: 2px solid #e0e0e0;
//   border-radius: 10px;
//   padding: 20px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const LeftImage = styled.img`
//   width: 200px; /* Increased width */
//   height: auto;
//   margin-right: 40px; /* Increased margin for spacing */
// `;

// const RightImage = styled.img`
//   width: 200px; /* Increased width */
//   height: auto;
//   margin-left: 40px; /* Increased margin for spacing */
// `;

// const Report = () => {
//   const report = {
//     PatientID: 'PAT123',
//     DoctorID: 'DOC456',
//     ReportDate: '2024-04-10',
//     ChiefComplaint: 'Headache',
//     Symptoms: ['Headache', 'Nausea'],
//     Tests: ['CT Scan', 'Blood Test'],
//     Diagnosis: 'Migraine',
//     Medications: ['Ibuprofen', 'Sumatriptan'],
//     FollowUpInstructions: 'Rest and hydrate. Follow up in 1 week.',
//     TreatmentDuration: '1 week',
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-blue-100">
//       <LeftImage src={leftImage} alt="Left Image" />
//       <div className="w-full lg:w-1/2 px-4 py-8">
//         <AnimatedCard>
//           <Typography tag="h1" className="text-3xl font-bold text-blue-800 mb-4 text-center">
//             Medical Report
//           </Typography>
//           {Object.entries(report).map(([key, value]) => (
//             <div key={key} className="mb-2">
//               <Typography tag="p" className="text-lg font-semibold text-gray-800 text-center">
//                 {key}
//               </Typography>
//               <Typography tag="p" className="text-lg text-gray-700 text-center">
//                 {Array.isArray(value) ? value.join(', ') : value}
//               </Typography>
//             </div>
//           ))}
//         </AnimatedCard>
//       </div>
//       <RightImage src={rightImage} alt="Right Image" />
//     </div>
//   );
// };

// export default Report;
