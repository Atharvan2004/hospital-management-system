import React from "react";

import { Carousel, Typography, Button } from "@material-tailwind/react";
 

const Service = ({ src, alt, heading, paragraph }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleApproach = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="w-full flex flex-col items-center relative"
      onMouseEnter={handleApproach}
      onMouseLeave={handleLeave}
    >
      <div className="relative">
        <div
          className="w-32 h-32 rounded-t-lg object-cover"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            border: isHovered ? '2px solid blue' : '2px solid transparent',
          }}
        />
        {isHovered && (
          <div className="absolute inset-0 bg-blue-500 bg-opacity-75 flex justify-center items-center rounded-full">
            <img src={src} alt={alt} className="w-20 h-20 rounded-full object-cover" />
          </div>
        )}
      </div>
      <div className="text-center mt-2">
        <h3 className={`text-lg font-semibold ${isHovered ? 'text-gray-700' : 'text-gray-900'}`}>{heading}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};


const ImageSlider = () => {
  const images = [
    { id: 1, src: "/images/serv1.png", alt: "Service 1", heading: "MediLink", paragraph: "Where compassion meets excellence in healthcare – Medilink, your partner in wellness" },
    { id: 2, src: "/images/serv2.png", alt: "Service 2", heading: "Eye Specialist", paragraph: "Experience clear vision and exceptional care with our specialized eye services." },
    { id: 3, src: "/images/serv3.png", alt: "Service 3", heading: "Dispensary", paragraph: "Our dispensary provides a wide range of medications and pharmaceutical services, ensuring you receive the right treatment and care.." },
    { id: 4, src: "/images/serv4.png", alt: "Service 4", heading: "Neuro Surgery", paragraph: "Our neurosurgery team delivers expert care for complex brain and spinal conditions." },
    { id: 5, src: "/images/serv5.png", alt: "Service 5", heading: "Pathology", paragraph: "Pathology plays a crucial role in the diagnosis and treatment of diseases" },
  ];

  return (
    <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img
          src="https://th.bing.com/th/id/OIP.1neMKkN9uz3Qze-BaXAMKgHaEL?w=295&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Best Surgeons team
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              
              Medilink boasts one of the finest surgical teams in the region, comprised of highly skilled and experienced surgeons dedicated to providing exceptional care to our patients. Our surgical team is renowned for its expertise across a wide range of specialties, including but not limited to orthopedic surgery, neurosurgery, cardiovascular surgery, and general surgery.
            </Typography>
            
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1682308449346-0d68b4e3f3fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcmRpb2xvZ3l8ZW58MHx8MHx8fDA%3D"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Heart Specialist
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Our team of heart specialists at Medilink is dedicated to providing the highest quality care for patients with cardiovascular conditions. With years of experience and expertise in the field, our cardiologists are committed to using the latest advancements in medical technology to ensure the best possible outcomes for our patients.
            </Typography>
            
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://media.istockphoto.com/id/1477483038/photo/doctors-nurse-or-laptop-in-night-healthcare-planning-research-or-surgery-teamwork-in-wellness.webp?b=1&s=170667a&w=0&k=20&c=pZ-HGH5Ri8gs9lXj6r1nuVIsO43cNa5Uh4zKb5CS52A="
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Best Consultation
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              At Medilink, our consultants are more than just experts in their respective fields; they are compassionate leaders dedicated to guiding patients towards optimal health. With a wealth of experience and a commitment to excellence, our consultants provide personalized care and innovative solutions to address a wide range of medical needs. 
            </Typography>
            
          </div>
        </div>
      </div>
    </Carousel>

  );
};

export default ImageSlider;
