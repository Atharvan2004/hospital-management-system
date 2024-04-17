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
  

  return (
    <Carousel autoplay loop autoplayDelay={2000} className="rounded-xl">
      <div className="relative h-4/6 w-full">
        <img
          src="https://wallpaperaccess.com/full/4433980.jpg"
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
          src="https://wallpaperaccess.com/full/4088661.jpg"
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
          src="https://wallpaperaccess.com/full/4433940.jpg"
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

