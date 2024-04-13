import React from "react";
import SearchBar from "@/components/SearchBar";
import Table from '@/components/Table'
import HPDoctorAvailable from "@/components/HPDoctorAvailable";
import SearchResult from "@/components/SearchResult";
import ImageSlider from "@/components/ImageSlider";

const HomePage = () => {

  // const { currentUser, loading, error } = useSelector((state) => state.doctor);
  
  // console.log(currentUser.age);

  return (
    <div className="bg-gray-100"> {/* Apply the background color here */}
      <div className="relative w-full">
        {/* Your group content */}
      <img
        src="images/backGround.jpg"
        alt="Image"
        className="absolute top-0 right-0 w-64 h-64"
      />
    </div>
      <SearchBar />
      <div className="w-3/5 mx-auto mt-12">
        <Table />
        
         {/* <div>{currentUser.age}</div>  */}

      </div>
      <div>
      <div className="flex w-1/2 justify-end">
        <img align="right" src="\images\home-img.svg" alt="for contact us" className="h-auto w-full" />
        <h1 className="ml-4 text-2xl font-bold text-blue-600 align-text-bottom">WELCOME BACK!!</h1>

      </div>

      <HPDoctorAvailable />
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
      <div>
        <ImageSlider/>
      </div>
      <div className="flex justify-center items-center h-screen"></div>
      <div>
      <h1 className="text-5xl font-bold text-blue-600 flex justify-center items-center">About doctors</h1>

        <img src="\images\about-img.svg" alt="for contact us" className="h-auto w-full" />

      </div>
      <div className="flex w-1/2 justify-end items-center">
        <img src="\images\book-img.svg" alt="for contact us" className="h-auto w-full" />
        <a href="/contact" className="ml-4 text-2xl font-bold text-blue-600">Contact Us!!!</a>

      </div>
    </div>
    </div>

  );
};

export default HomePage;
