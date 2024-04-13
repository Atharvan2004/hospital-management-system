import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
    <Carousel>
      {images.map((image) => (
        <Service key={image.id} src={image.src} alt={image.alt} heading={image.heading} paragraph={image.paragraph} />
      ))}
    </Carousel>
  );
};

export default ImageSlider;
