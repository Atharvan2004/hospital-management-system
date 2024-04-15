import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Doctor = ({ name, image }) => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleApproach = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
    setIsAvailable(false);
  };

  const handleHover = () => {
    if (isHovered) {
      setIsAvailable(true);
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center relative"
      onMouseEnter={handleApproach}
      onMouseLeave={handleLeave}
      onMouseMove={handleHover}
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-t-lg object-cover"
          style={{
            border: isHovered ? "2px solid blue" : "2px solid transparent",
          }}
        />
        {isAvailable && (
          <div className="absolute inset-0 bg-opacity-75 flex justify-center items-center">
            <p className="text-white align-text-bottom">Available</p>
          </div>
        )}
      </div>
      <div className="bg-white p-2 rounded-b-lg border-t border-gray-200">
        <p className="text-center">{name}</p>
      </div>
    </div>
  );
};

const HPDoctorAvailable = () => {
  const doctors = [
    { id: 1, name: "Dr. Jane Smith", image: "/images/doc-1.jpg" },
    { id: 2, name: "Dr. John Doe", image: "/images/doc-2.jpg" },
    { id: 3, name: "Dr. Mark Johnson", image: "/images/doc-3.jpg" },
    { id: 4, name: "Dr. Dong Lee", image: "/images/doc-4.jpg" },
    { id: 5, name: "Dr. David Brown", image: "/images/doc-5.jpg" },
    { id: 6, name: "Dr. Emily White", image: "/images/doc-6.jpg" }
    
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true
  };

  return (
    <Slider className="" {...settings}>
      {doctors.map((doctor) => (
        <Card key={doctor.id} className="mt-6 w-10 bg-brown-50 mx-auto ">
        <CardBody className="mx-auto">
            <img className="w-40 h-40 mx-auto"
              src={doctor.image}
              alt="card-image"
            />
          
            <Typography variant="h5" color="blue-gray" className="mb-1 mx-auto pl-36 mt-5">
             {doctor.name}
            </Typography>
            
          </CardBody>
        </Card>
      ))}
    </Slider>
  );
};

export default HPDoctorAvailable;
