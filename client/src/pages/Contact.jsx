import React from "react";
import contactImg from "../assets/contact.avif";
const Contact = () => {
  return(
    <>
         <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-blue-50">
      {/* Contact Information */}
      <div className="bg-white p-6 rounded-md shadow-md max-w-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mb-4 lg:mb-0">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <div className="mb-4 flex items-center">
          
          <span className="font-semibold">&#9742; &#65039; Phone:</span>
          <span className="ml-2">9999999999</span>
        </div>
        <div className="mb-4 flex items-center">
          
          <span className="font-semibold">&#9993; Email:</span>
          <span className="ml-2">xyz@email.com</span>
        </div>
        <p className="mb-4 text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula turpis ac ligula malesuada,
          in condimentum libero convallis. Nullam nec est finibus, eleifend eros nec, commodo justo.
        </p>
      </div>
      {/* Image */}
      <div className="flex justify-center items-center lg:w-1/2">
      <img src={contactImg} alt="Hospital" className="rounded-md shadow-md" />
      </div>
    </div>
    </>
  )
};

export default Contact;

