import Footer from "@/components/Footer";
import React from "react";

const About = () => {
  return (
    <>
    <div className="flex mt-80 ml-96 mr-70 mb-72">
      <div className="">
        <img
          src="/src/assets/contact.avif" // corrected the image source path
          alt="contactus"
          className="mt-0 max-w-full h-auto" // added max-w-full and h-auto for image responsiveness
        />
      </div>
      <div className="flex flex-col ml-4"> {/* Changed flex-wrap to flex and added ml-4 for margin */}

        <div className="text-xl font-semibold mb-4">About Us</div> {/* Added text-xl, font-semibold, and mb-4 for styling */}
        <p className="text-justify mt-2 max-w-md"> {/* Changed w-30 to max-w-md and adjusted mt-12 to mt-2 */}
        Welcome to Medilink, where your health and well-being are our top priorities.

Our dedicated team is here to provide you with the highest quality care and support,

ensuring that you receive personalized treatment to your needs.

We look forward to serving you and helping you achieve your health goals."
        </p>
      </div>
    </div>
      <Footer/>

    </>
  );
};

export default About;
