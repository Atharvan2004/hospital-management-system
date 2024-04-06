import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
import { doctorsignInSuccess } from "@/store/slices/doctorSlice.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { patientsignInSuccess } from "@/store/slices/patientSlice";
import { staffsignInSuccess } from "@/store/slices/staffSlice";

const LoginForm = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Doctor");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    // dispatch(signInStart());

    const data = {
      userId: userId,
      password: password,
      role: role,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // axios.post('http://localhost:3000/login', data, config)
    //   .then(response => {
    //     console.log('Response:', response.data);
    //     dispatch(signInSuccess(response.data));

    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });

    const response = await axios.post(
      "http://localhost:3000/login",
      data,
      config
    );

    if (response.status != 200) {
      console.log("response error");
    }

    // console.log(response);

    console.log(response.data.user);
    switch (role) {
      case "Doctor":
        dispatch(doctorsignInSuccess(response.data.user));
        navigate("/doctor-dash");
        break;
      case "Patient":
        dispatch(patientsignInSuccess(response.data.user));
        navigate("/patient-dash");
        break;
      case "Staff":
        dispatch(staffsignInSuccess(response.data.user));
        navigate("/staff-dash");
        break;
      default:
        navigate('/')
        break;
    }
  };

  const roleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Card className="w-96 mx-auto mt-20">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input
          label="User ID"
          size="lg"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          size="lg"
          value={password}
          onChange={roleChange}
        />
        <div className="w-full">
          <Select
            label="Select Role"
            value={role}
            onChange={(e) => {
              console.log(e);
              setRole(e);
            }}
          >
            <Option value="Doctor">Doctor</Option>
            <Option value="Patient">Patient</Option>
            <Option value="Staff">Staff</Option>
          </Select>
        </div>
        <div className="-ml-2.5">
          <Checkbox label="Remember Me" />
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth onClick={handleSignIn}>
          Sign In
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            as="a"
            href="/signup"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Sign up
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
