import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MedicineForms() {
  const [medicineDetails, setMedicineDetails] = useState({
    name: "",
    price: "",
    type: "",
    count: "",
  });


  const submit = async () => {
    console.log(medicineDetails);
    const response = await axios.post("http://localhost:3000/addMedicine", {
      formData: medicineDetails,
      token: localStorage.getItem("token"),
    }).then((response)=>{
      toast.success(`${response.data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      console.log(response.data.message)

    }).catch((e)=>{
      toast.error(`${e}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    });
    // setMedicineDetails({
    //   name: "",
    //   price: "",
    //   type: "",
    //   count: "",
    // });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicineDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <>
    <ToastContainer/>
    
    <div className="flex">
      <div className="flex-1">
        <Card
          color="transparent"
          shadow={false}
          className="mx-auto w-2/5 border mt-4 py-3 mb-40"
        >
          <Typography variant="h4" color="blue-gray" className="mx-auto">
            Medicine-Form
          </Typography>
          <Typography color="gray" className="mt-1 font-normal mx-auto">
            Enter details of Medicine to add
          </Typography>

          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Medicine Name
              </Typography>
              <Input
                size="lg"
                placeholder="Medicine Name"
                value={medicineDetails.name}
                onChange={handleChange}
                name="name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                price
              </Typography>
              <Input
                size="lg"
                placeholder="price"
                value={medicineDetails.price}
                onChange={handleChange}
                name="price"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                type
              </Typography>
              <Input
                size="lg"
                placeholder="type"
                value={medicineDetails.type}
                onChange={handleChange}
                name="type"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                count
              </Typography>
              <Input
                size="lg"
                placeholder="count"
                value={medicineDetails.count}
                onChange={handleChange}
                name="count"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            <div className="">
              <Button onClick={submit} className="mt-3 ml-36" ripple>
                Submit
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
    </>
  );
}

export default MedicineForms;
