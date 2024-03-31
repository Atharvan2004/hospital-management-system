import { useEffect, useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const StaffProfile = () => {
  const [staffDetails, setStaffDetails] = useState({
    name: '',
    address: '',
    age: '',
    sex: '',
    contact: {
      phone: '',
      email: '',
    },
    userID: '',
    password: '',
    shiftTimings: '',
    salary: '',
  });

  useEffect(() => {
    
    const fetchStaffDetails = async () => {
      try {
        const response = await fetch('<your_backend_api_url>');
        if (response.ok) {
          const data = await response.json();
          setStaffDetails(data);
        } else {
          throw new Error('Failed to fetch staff details');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchStaffDetails();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', staffDetails);
  };

  return (
    <div className="text-center bg-brown-200 ">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Profile
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Specialisation in Medicine, Office 304
        </Typography>
        <img src="\images\downloads.png" alt="Staff Image" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' />
        
        <form onSubmit={handleSubmit} className="mx-auto mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 bg-gray-300 rounded-xl">
          <div className="mb-1 flex flex-col gap-6 ">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Name
            </Typography>
            <Input
              size="lg"
              placeholder="Enter Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mx"
              value={staffDetails.name}
              onChange={handleChange}
              name="name"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Address
            </Typography>
            <Input
              size="lg"
              placeholder="Enter Address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mx"
              value={staffDetails.address}
              onChange={handleChange}
              name="address"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Age
            </Typography>
            <Input
              size="lg"
              placeholder="Enter Age"
              type="number"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={staffDetails.age}
              onChange={handleChange}
              name="age"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Sex
            </Typography>
            <Input
              size="lg"
              placeholder="Enter Sex"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={staffDetails.sex}
              onChange={handleChange}
              name="sex"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Phone
            </Typography>
            <Input
              size="lg"
              placeholder="Enter Phone"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={staffDetails.contact.phone}
              onChange={handleChange}
              name="contact.phone"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="Enter Email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={staffDetails.contact.email}
              onChange={handleChange}
              name="contact.email"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="Enter Password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={staffDetails.password}
              onChange={handleChange}
              name="password"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Shift Timings
            </Typography>
            <Input
              size="lg"
              placeholder="Enter Shift Timings"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={staffDetails.shiftTimings}
              onChange={handleChange}
              name="shiftTimings"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Salary
            </Typography>
            <Input
              size="lg"
              placeholder="Enter Salary"
              type="number"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={staffDetails.salary}
              onChange={handleChange}
              name="salary"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          
          <Button type="submit" className="mt-6" fullWidth>
            Update
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default StaffProfile;
