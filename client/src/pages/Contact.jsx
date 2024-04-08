import React from "react";

const Contact = () => {
  return(
    <>
      <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="max-w-md p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label className="block mb-1">Name:</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="text" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Contact number:</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="tel" placeholder="9999999999" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email id:</label>
            <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" type="email" placeholder="xyz@email.com" />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Message:</label>
            <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">Submit</button>
        </form>
      </div>
    </div>

    
      
    </>
  )
};

export default Contact;

