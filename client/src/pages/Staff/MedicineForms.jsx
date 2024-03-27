import React, { useState } from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

function MedicineForms(){
  const [medicines, setMedicines] = useState([]);
  const [medicineDetails, setMedicineDetails] = useState({
    name: '',
    Price: '',
    Type: '',
    Count: ''
  });

  const addMedicine = () => {
    setMedicines([...medicines, medicineDetails]);
    setMedicineDetails({
      name: '',
      Price: '',
      Type: '',
      Count: ''
    });
  };

  const submit = () => {
    setMedicineDetails({
      name: '',
      Price: '',
      Type: '',
      Count: ''
    });
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicineDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  return (
    <div className="flex">
      <div className="flex-1">
        <Card
          color="transparent"
          shadow={false}
          className="mx-auto w-full border mt-4 py-3 mb-40"
        >
          <Typography variant="h4" color="blue-gray" className="mx-auto">
            Medicine-Forms
          </Typography>
          <Typography color="gray" className="mt-1 font-normal mx-auto">
            Nice to meet you! Enter details of Medicine
          </Typography>
          {medicines.map((medicine, index) => (
            <div key={index} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Medicine Name
                </Typography>
                <Input
                  size="lg"
                  placeholder="Medicine Name"
                  value={medicine.name}
                  name="name"
                  disabled
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Price
                </Typography>
                <Input
                  size="lg"
                  placeholder="Price"
                  value={medicine.Price}
                  name="Price"
                  disabled
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Type
                </Typography>
                <Input
                  size="lg"
                  placeholder="Type"
                  value={medicine.Type}
                  name="Type"
                  disabled
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Count
                </Typography>
                <Input
                  size="lg"
                  placeholder="Count"
                  value={medicine.Count}
                  name="Count"
                  disabled
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>
          ))}
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
                Price
              </Typography>
              <Input
                size="lg"
                placeholder="Price"
                value={medicineDetails.Price}
                onChange={handleChange}
                name="Price"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Type
              </Typography>
              <Input
                size="lg"
                placeholder="Type"
                value={medicineDetails.Type}
                onChange={handleChange}
                name="Type"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Count
              </Typography>
              <Input
                size="lg"
                placeholder="Count"
                value={medicineDetails.Count}
                onChange={handleChange}
                name="Count"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Button
              onClick={addMedicine}
              className="mt-3"
              color="lightBlue"
              ripple="light"
            >
              Add Medicine
            </Button>
          
          <Button
            onClick={submit}
            className="mt-3"
            color="lightBlue"
            ripple="light"
          >
            Submit
          </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default MedicineForms;