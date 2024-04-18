import React from "react";
import HPDoctorAvailable from "@/components/HPDoctorAvailable";
import ImageSlider from "@/components/ImageSlider";
import Footer from "@/components/Footer";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

const HomePage = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    // Redirect to the /login route
    navigate('/login');
  };

  return (
    <div className="bg-gradient-to-r from-teal-50 to-green-200">
      <a href="/contact">
        <h1
          className="fixed text-red-600 z-20 bg-yellow-50 bg-opacity-50 drop-shadow-md shadow-black rounded-t-lg px-4 pt-3"
          style={{
            transform: "rotate(90deg)",
            transformOrigin: "bottom left",
            top: "300px",
            fontSize: "1.5rem",
          }}
        >
          EMERGENCY
        </h1>
      </a>

      <img className="w-full" src="images/front.png" />

      <div className="bg-transparent py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Welcome to MediLink
          </h1>
          <p className="text-lg text-center text-gray-600">
            Welcome to Medilink, where your health and well-being are our top
            priorities.{" "}
          </p>
          <p className="text-lg text-center text-gray-600">
            {" "}
            Our dedicated team is here to provide you with the highest quality
            care and support,
          </p>
          <p className="text-lg text-center text-gray-600">
            ensuring that you receive personalized treatment to your needs.
          </p>
          <p className="text-lg text-center text-gray-600">
            {" "}
            We look forward to serving you and helping you achieve your health
            goals."
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen">
        <div className="w-1/2">
          <img
            src="\images\home-img.svg"
            alt="for contact us"
            className="mx-auto"
          />
        </div>
      </div>

      <h1 className="text-center text-black font-bold relative text-4xl mb-20">
        <span>Book Your Appointment Online</span>
      </h1>

      <div className="flex justify-evenly w-4/5 mx-auto mb-20">
        <Card
          color="gray"
          variant="gradient"
          className="w-full max-w-[20rem] -mr-6 p-8"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
          >
            <Typography
              variant="small"
              color="white"
              className="font-normal uppercase"
            >
              Doctor
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mt-6 flex justify-center gap-1 text-7xl font-normal"
            >
              <span className="self-end text-4xl">Available for Consultation</span>
              
            </Typography>
          </CardHeader>
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">General Medicine</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">Specialisations in 10+ fields</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Surgery specialists
                </Typography>
              </li>
            </ul>
          </CardBody>
          <CardFooter className="mt-12 p-0">
            <Button
            type="link"
              size="lg"
              color="white"
              className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
              ripple={false}
              fullWidth={true}
              onClick={handleClick}
            >
              Book Appointment
            </Button>
          </CardFooter>
        </Card>
        <Card
          color="gray"
          variant="gradient"
          className="w-full max-w-[20rem] -mr-6 p-8"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
          >
            <Typography
              variant="small"
              color="white"
              className="font-normal uppercase"
            >
              Hospital Ward
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mt-6 flex justify-center gap-1 text-7xl font-normal"
            >
              
              <span className="self-end text-4xl">Sophisticated Features</span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">Report Generation</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">Book Appointment</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                  Medicine availibility
                </Typography>
              </li>
            </ul>
          </CardBody>
          <CardFooter className="mt-12 p-0">
            <Button
              size="lg"
              color="white"
              className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
              ripple={false}
              fullWidth={true}
              onClick={handleClick}
            >
              Join Now
            </Button>
          </CardFooter>
        </Card>
        <Card
          color="gray"
          variant="gradient"
          className="w-full max-w-[20rem] p-8"
        >
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
          >
            <Typography
              variant="small"
              color="white"
              className="font-normal uppercase"
            >
              Nurse
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="mt-6 flex justify-center gap-1 text-7xl font-normal"
            >
              
              <span className="self-end text-4xl">Available for Patient Care</span>
            </Typography>
          </CardHeader>
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">Monitoring</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">Basic Patient Care</Typography>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-white/20 bg-white/20 p-1">
                  <CheckIcon />
                </span>
                <Typography className="font-normal">
                Medication Administration
                </Typography>
              </li>
            </ul>
          </CardBody>
          <CardFooter className="mt-12 p-0">
            <Button
              size="lg"
              color="white"
              className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
              ripple={false}
              fullWidth={true}
              onClick={handleClick}
            >
             Request Nurse
            </Button>
          </CardFooter>
        </Card>
        
      </div>
      <h1 className="text-center mb-20 text-black font-bold relative text-5xl mt-8">
        <span>Our Specialties</span>
      </h1>
      <ImageSlider />

      <div>
        <h1 className="text-5xl mt-20 font-bold mb-20 text-gray-900 flex justify-center items-center">
          Our Team of Experts
        </h1>
        
        <HPDoctorAvailable />
      </div>

      <div className="flex justify-center items-center h-screen">
        <div className="w-1/2 text-center">
          <div>
            <img
              src="\images\book-img.svg"
              alt="for contact us"
              className="mx-auto"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
