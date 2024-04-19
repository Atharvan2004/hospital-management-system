import { useEffect, useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";

const StaffProfile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.staff);

  // Destructure values from currentUser
  // console.log(currentUser)/
  const { name: initialName, address: initialAddress,age:age,sex:sex,shiftTimings:shiftTimings,salary:salary, phone: initialPhone, email: initialEmail, password: initialPassword } = currentUser;

  // State variables to hold input values
  const [name, setName] = useState(initialName);
  const [address, setAddress] = useState(initialAddress);
  const [phone, setPhone] = useState(initialPhone);
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState(initialPassword);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
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

  return (
    <div className="text-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Profile
        </Typography>
        
        <img src="\images\downloads.png" alt="Staff Image" className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 border-2 border-cyan-400' />
        
        <form className="mx-auto mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 bg-gray-300 rounded-xl">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Name
            </Typography>
            <Input
              size="lg"
              placeholder="Enter Name"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 mx"
              value={name}
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
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 mx"
              value={address}
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
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 mx"
              value={age}
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
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 mx"
              value={sex}
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
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 mx"
              value={phone}
              onChange={handleChange}
              name="phone"
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
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 mx"
              value={email}
              onChange={handleChange}
              name="email"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              size="lg"
              placeholder="Enter Password"
              type="password"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 mx"
              value={password}
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
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 mx"
              value={shiftTimings}
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
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 mx"
              value={salary}
              onChange={handleChange}
              name="salary"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          
          {/* Add other Input components */}
          
          {/* <Button type="submit" className="mt-6" fullWidth>
            Update
          </Button> */}
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
