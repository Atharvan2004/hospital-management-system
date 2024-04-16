import { useState } from "react";
import axios from "axios";
import { Input, Button } from "@material-tailwind/react";
import { List, ListItem } from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

function SearchPatient() {
    const [name, setName] = useState("");
    const [list, setList] = useState(null);
    const navigate = useNavigate();
    
  const onChangeFunc = ({ target }) => setName(target.value);
  async function handleSearch() {
    try {
      console.log(name);
      const result = await axios
        .post("http://localhost:3000/search", { query: name, model: "Patient" })
        .catch((err) => {
          console.log(err);
        });
      console.log(result.data); // Check the response data
      setList(result.data.patientList);
    } catch (error) {
      console.error("Error occurred while searching:", error);
      // Handle error (e.g., show error message to the user)
    }
  }
  const handleNewReport = (userId) => {
    // Redirect to a new page for creating a report for the selected patient
    navigate(`/create-report/${userId}`);
  };
  return (
    <div className="w-3/6 mx-auto my-6">
      <Card className="w-4/5">
        <div className="relative flex w-full max-w-[24rem] mx-auto">
          <Input
            type="name"
            label="Name"
            value={name}
            onChange={onChangeFunc}
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            color={name ? "gray" : "blue-gray"}
            disabled={!name}
            className="!absolute right-1 top-1 rounded"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
        <div className="body shadow-none mt-8 mr-20">
          <Typography className="mb-3 ml-2 pl-3 pb-3" variant="h3">
            Patient List
          </Typography>
          {list && (
            <Card className="w-full ml-10">
              <List>
                {list &&
                  list.map((patient, index) => {
                    return (
                      <ListItem key={index}>
                        <div className="flex items-center w-full">
                          <div className="mr-4">
                            <span className="text-blue-500">{index + 1}.</span>
                          </div>
                          <div className="w-auto">
                            <h6 className="text-xl font-semibold">
                              {patient.name}
                            </h6>
                            <p className="text-sm text-gray-500">
                              <strong>Address:</strong> {patient.address}
                              <br />
                              <strong>Age:</strong> {patient.age}
                              <br />
                              <strong>Blood Group:</strong> {patient.bloodGroup}
                              <br />
                              <strong>Email:</strong> {patient.email}
                              <br />
                              <strong>Phone:</strong> {patient.phone}
                              <br />
                              <strong>Sex:</strong> {patient.sex}
                              <br />
                            </p>
                          </div>
                          <div className="ml-auto mr-10">
                            <Button size="sm"
                              onClick={() => handleNewReport(patient._id)}
                            >
                              New Report
                            </Button>
                          </div>
                        </div>
                      </ListItem>
                    );
                  })}
              </List>
            </Card>
          )}
        </div>
      </Card>
    </div>
  );
}

export default SearchPatient;
