import React from "react";
import SearchBar from "@/components/SearchBar";
import Table from "@/components/Table";
import HPDoctorAvailable from "@/components/HPDoctorAvailable";
import ImageSlider from "@/components/ImageSlider";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative w-full">
        <img
          src="images/backGround.jpg"
          alt="Image"
          className="absolute top-0 right-0 w-64 h-64"
        />
      </div>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Welcome to Our Hospital</h1>
          <p className="text-lg text-center text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
        </div>
      </div>
      
      
      <div className="flex w-1/2 justify-end">
        <img src="\images\home-img.svg" alt="for contact us" className="h-auto w-full ml-auto" />
      </div>
      <h1 className="text-center text-black font-bold relative text-4xl mt-8">
      <span>Book Your Appointment Online</span>
      
      </h1>
      <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center h-screen">
        
        <div className="flex justify-center items-center gap-4">
          <div className="max-w-sm bg-gray-200 p-4 text-center" style={{ backgroundImage: 'url(/images/doctor.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="text-2xl font-bold mb-2">Doctor</div>
            <div className="text-4xl font-bold mb-2">Available for Consultation</div>
            <ul className="text-left">
              <li className="mb-2">✅ General Medicine</li>
              <li className="mb-2">✅ Pediatrics</li>
              <li className="mb-2">✅ Surgery</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Book Appointment</button>
          </div>
          <div className="max-w-sm bg-gray-200 p-4 text-center" style={{ backgroundImage: 'url(/images/nurse.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="text-2xl font-bold mb-2">Nurse</div>
            <div className="text-4xl font-bold mb-2">Available for Patient Care</div>
            <ul className="text-left">
              <li className="mb-2">✅ Monitoring</li>
              <li className="mb-2">✅ Medication Administration</li>
              <li className="mb-2">✅ Basic Patient Care</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Request Nurse</button>
          </div>
          <div className="max-w-sm bg-gray-200 p-4 text-center" style={{ backgroundImage: 'url(/images/bed.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="text-2xl font-bold mb-2">Hospital Ward</div>
            <div className="text-4xl font-bold mb-2">Available Beds For Emergency</div>
            <ul className="text-left">
              <li className="mb-2">✅ Single Bed</li>
              <li className="mb-2">✅ Double Bed</li>
              <li className="mb-2">✅ ICU</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Reserve Bed</button>
          </div>
        </div>
      </div>
      </div>

      <h1 className="text-center text-black font-bold relative text-4xl mt-8">
        <span>Our Specialties</span>
      </h1>
    <ImageSlider />
    <h1 className="text-center text-black font-bold relative text-4xl mt-8 mb-20">
      <span>Our Team of Experts</span>
    </h1>
    <HPDoctorAvailable />

      <div className="flex justify-center items-center h-screen"></div>
      <div>
        <h1 className="text-5xl font-bold text-blue-600 flex justify-center items-center">About Our Doctors</h1>
        <img src="\images\about-img.svg" alt="for contact us" className="h-auto w-full" />
      </div>
      <div className="flex w-1/2 justify-end items-center">
        <img src="\images\book-img.svg" alt="for contact us" className="h-auto w-full" />
        <h1 className="ml-4 text-2xl font-bold text-blue-600">Contact Us</h1>
      </div>
    </div>
  );
};

export default HomePage;
