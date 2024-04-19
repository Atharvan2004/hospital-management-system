import { useEffect,useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";


const Pprofile = () => {

  const { currentUser, loading, error } = useSelector((state) => state.patient);

  // Destructure values from currentUser
  const { name: initialName, address: initialAddress, phone: initialPhone, email: initialEmail, password: initialPassword } = currentUser;

  // State variables to hold input values
  const [name, setName] = useState(initialName);
  const [address, setAddress] = useState(initialAddress);
  const [phone, setPhone] = useState(initialPhone);
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);

  // Handle input changes
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return(
    <div className="text-center ">
      <Card color="transparent" shadow={false}>
    <Typography variant="h4" color="blue-gray">
      Profile
    </Typography>
    <Typography color="gray" className="mt-1 font-normal ">
      Specialisation in Medicine, Office 304
    </Typography>
    <img src="\images\downloadp.png" alt="Patient Image" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 border-2 border-cyan-400 '  />
    <form className="mx-auto mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 bg-gray-300 rounded-xl">
      <div className="mb-1 flex flex-col gap-6  sh">
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
          value={name}
          onChange={handleNameChange}
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
          value={address}
          onChange={handleAddressChange}
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
          value={phone}
          onChange={handlePhoneChange}
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
          value={email}
          onChange={handleEmailChange}
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
          value={password}
          onChange={handlePasswordChange}
    />
      </div>
      
      {/* <Button className="mt-6" fullWidth>
        Update
      </Button> */}
      <Typography color="gray" className="mt-4 text-center font-normal">
        Already have an account?{" "}
        <a href="/login" className="font-medium text-gray-900">
          Sign In
        </a>
      </Typography>
    </form>
  </Card>
    </div>
  
  );
};

export default Pprofile;
