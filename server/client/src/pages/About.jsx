import Footer from "@/components/Footer";
import React from "react";

const About = () => {
  return (
    <>
        <div className="flex mt-40 ml-40 mr-80">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          officiis obcaecati esse tempore unde ratione, eveniet mollitia,
          perferendis eius temporibus dicta blanditiis doloremque explicabo
          quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
          accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
          commodi illum quidem neque tempora nam.
        </p>
      </div>
    </div>
      <Footer/>

    </>
  );
};

export default About;
