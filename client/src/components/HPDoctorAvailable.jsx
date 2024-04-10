import React, { useState } from "react";

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
      className="w-1/3 flex flex-col items-center relative"
      onMouseEnter={handleApproach}
      onMouseLeave={handleLeave}
      onMouseMove={handleHover}
    >
      <div className="relative" >
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-t-lg object-cover"
          style={{ border: isHovered ? "2px solid blue" : "2px solid transparent" }}
        />
        {isAvailable && (
          <div className="absolute inset-0  bg-opacity-75 flex justify-center items-center">
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
    { id: 1, name: "Dr. John Doe", image: "/images/doc-1.jpg" },
    { id: 2, name: "Dr. Jane Smith", image: "/images/doc-2.jpg" },
    { id: 3, name: "Dr. Alice Johnson", image: "/images/doc-3.jpg" },
    { id: 4, name: "Dr. Bob Williams", image: "/images/doc-4.jpg" },
    { id: 5, name: "Dr. Sarah Brown", image: "/images/doc-5.jpg" },
    { id: 6, name: "Dr. Michael Davis", image: "/images/doc-6.jpg" },
  ];

  const visibleDoctors = doctors.slice(0, 6);

  return (
    <div className="grid grid-cols-3 gap-8 justify-center">
      {visibleDoctors.map((doctor) => (
        <Doctor key={doctor.id} name={doctor.name} image={doctor.image} />
      ))}
    </div>
  );
};
export default HPDoctorAvailable;
