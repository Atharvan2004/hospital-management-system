import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardBody, Typography, Carousel } from "@material-tailwind/react";

const HPDoctorAvailable = () => {
  const doctors = [
    { id: 1, name: "Dr. Jane Smith", image: "/images/doc-1.jpg" },
    { id: 2, name: "Dr. John Doe", image: "/images/doc-2.jpg" },
    { id: 3, name: "Dr. Mark Johnson", image: "/images/doc-3.jpg" },
    { id: 4, name: "Dr. Dong Lee", image: "/images/doc-4.jpg" },
    { id: 5, name: "Dr. David Brown", image: "/images/doc-5.jpg" },
    { id: 6, name: "Dr. David White", image: "/images/doc-6.jpg" },
  ];

  return (
    <Carousel loop autoplay autoplayDelay={3000} className="">
      {doctors.map((doctor) => (
        <Card key={doctor.id} className="w-1/5 bg-brown-50 mx-auto">
          <CardBody className="mx-auto">
            <img className=" mx-auto" src={doctor.image} alt="card-image" />

            <Typography variant="h5" color="blue-gray" className="my-5 mx-auto">
              {doctor.name}
            </Typography>
          </CardBody>
        </Card>
      ))}
    </Carousel>
  );
};

export default HPDoctorAvailable;
