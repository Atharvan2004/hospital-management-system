import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
        <img
          src={src}
          alt={alt}
          className="w-32 h-32 rounded-t-lg object-cover"
          style={{ border: isHovered ? "2px solid blue" : "2px solid transparent" }}
        />
        {isHovered && (
          <div className="absolute inset-0 bg-opacity-75 flex justify-center items-center">
            <div className="text-center">
              <h2 className="text-xl font-bold text-white">heading</h2>
              <p className="text-white">paragraph</p>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

const ImageSlider = () => {
  const images = [
    { id: 1, src: "/images/serv1.png", alt: "Service 1" },
    { id: 2, src: "/images/serv2.png", alt: "Service 2" },
    { id: 3, src: "/images/serv3.png", alt: "Service 3"},
    { id: 4, src: "/images/serv4.png", alt: "Service 4" },
    { id: 5, src: "/images/serv5.png", alt: "Service 5" },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 2,
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <Service key={image.id} src={image.src} alt={image.alt} heading={image.heading} paragraph={image.paragraph} />
      ))}
    </Slider>
  );
};

export default ImageSlider;
