import { useEffect,useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";


const Pprofile = () => {
  return(
    <div className="text-center bg-blue-400 ">
      <Card color="transparent" shadow={false}>
    <Typography variant="h4" color="blue-gray">
      Profile
    </Typography>
    <Typography color="gray" className="mt-1 font-normal">
      Specialisation in Medicine, Office 304
    </Typography>
    <img src="\images\downloadp.png" alt="Patient Image" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' />
    <form className="mx-auto mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 bg-gray-300 rounded-xl">
      <div className="mb-1 flex flex-col gap-6 ">
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Name
        </Typography>
        <Input
          size="lg"
          placeholder="name@mail.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mx"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Address
        </Typography>
        <Input
          size="lg"
          placeholder="name@mail.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mx"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Phone
        </Typography>
        <Input
          size="lg"
          placeholder="name@mail.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        <Typography variant="h6" color="blue-gray" className="-mb-3">
          Email
        </Typography>
        <Input
          size="lg"
          placeholder="name@mail.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
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
          placeholder="********"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>
      
      <Button className="mt-6" fullWidth>
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

export default Pprofile;
