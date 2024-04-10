import React, { useEffect, useState } from "react";
import Layout from "../../components/PLayout";
import { useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
} from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";




const PatientDashboard = () => {

  const { currentUser, loading, error } = useSelector((state) => state.patient);
  const [appointments, setAppointments] = useState([]);

  const fetchAppointmets = async()=>{
    try {
      const response = await axios.post(
        "http://localhost:3000/getAppointment",
        {
          token: localStorage.getItem("token"),
        }
      );

      setAppointments(response.data.data);
    } catch (error) {
      console.error("Error   fetching appointments:", error);
    }
  }

  useEffect(()=>{
    console.log(currentUser);
    fetchAppointmets();
  },[]);

  
  return (
    <Layout>
      <div className="flex">
              <div className="body shadow-none mt-8 mr-20">
                <Typography className="mb-3 ml-2" variant="h4">Appointments</Typography>
                <Card className="w-96">
                  <List>
                    {appointments.map((appointment, index) => {
                      var date = new Date(appointment.date);
                      date = date.toLocaleDateString();
                      return (
                        <ListItem key={index}>
                          <ListItemPrefix>{index + 1}.</ListItemPrefix>
                          <div>
                            <Typography variant="h6" color="blue-gray">
                              {appointment.doctorID.name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="gray"
                              className="font-normal"
                            >
                              Time: {appointment.time}   Date: {date} 
                            </Typography>
                          </div>
                        </ListItem>
                      );
                    })}
                  </List>
                </Card>
              </div>
              
            </div>
      
    </Layout>
  );
  };

export default PatientDashboard;
