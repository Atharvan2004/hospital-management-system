import React, { useEffect, useState } from "react";
import Layout from "../../components/PLayout";
import { useSelector } from "react-redux";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Button,
} from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom/dist";
import baseURL from "../../../port";






const PatientDashboard = () => {

  const { currentUser, loading, error } = useSelector((state) => state.patient);
  const [appointments, setAppointments] = useState([]);
  const [reports , setReports]= useState([]);
  const [doctors,setDoctors]=useState([]);
  const navigate = useNavigate();

  

  const fetchAppointmets = async()=>{
    try {
      const response = await axios.post(
        `${baseURL}/getAppointment`,
        {
          token: localStorage.getItem("token"),
        }
      );

      setAppointments(response.data.data);
    } catch (error) {
      console.error("Error   fetching appointments:", error);
    }
  }

  const fetchReports= async ()=>{
    try {
      const response = await axios.post(
        `${baseURL}/getReports`,
        {
          token: localStorage.getItem("token"),
        }
      );

      setReports(response.data.reportList);
      
    } catch (error) {
      console.error("Error in fetching Reports",error);
    }
  }

  const fetchDoctors =async ()=>{
    try {
      const response = await axios.post(
        `${baseURL}/getDoctors`,
        {
          token: localStorage.getItem("token"),
        }
      );

      setDoctors(response.data.doctorList);
      
      
    } catch (error) {
      console.error("Error while fetching Doctors",error);
    }
  }

  useEffect(()=>{
    console.log(currentUser);
    fetchAppointmets();
    fetchReports();
    fetchDoctors();
  },[]);

  const navigateToReport = (reportId) => {
    
    console.log(`Navigating to report with ID: ${reportId}`);
    navigate(`/report-display/${reportId}`)
    
  };

  const navigateToAppointment = (doctorId) => {
    
    console.log(`Navigating to Appointment with ID: ${doctorId}`);
    navigate(`/appointment/${doctorId}`)
    
  };
  

  
  return (
    <Layout>
      <div className="flex">
              <div className="body shadow-none bg-blue-gray-50 rounded-lg mt-8 mr-10">
                <Typography className="mb-3 ml-2" variant="h4">Appointments</Typography>
                <Card  className="w-96">
                  
                  <List className="max-h-[500px] overflow-y-auto">
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
                              Time: {appointment.time}   Date: {date} <div>status:🟢 {appointment.status}</div>
                            </Typography>
                          </div>
                        </ListItem>
                      );
                    })}
                  </List>
                </Card>
              </div>

              <div className="body shadow-none bg-blue-gray-100 rounded-md mt-8 mr-10">
                <Typography className="mb-3 ml-2" variant="h4">Your Reports</Typography>
                <Card className="w-96">
                  <List className="max-h-[500px] overflow-y-auto">
                    {reports.map((report, index) => {
                      
                      return (
                        <ListItem key={index} Button onClick={() => navigateToReport(report._id)}>
                          <ListItemPrefix>{index + 1}.</ListItemPrefix>
                          <div>
                            <Typography variant="h6" color="blue-gray">
                              {report.chiefComplaint}
                            </Typography>

                            <Typography
                              variant="small"
                              color="gray"
                              className="font-normal"
                            >
                                  {report._id}
                            </Typography>
                          </div>
                        </ListItem>
                      );
                    })}
                  </List>
                </Card>
              </div>

              <div>
                <div className="body shadow-none bg-blue-gray-50  mt-8 mr-0">
                  <Typography className="mb-3 ml-2" variant="h4">Book Appointment</Typography>
                  <Card className="w-96">
                    <List className="max-h-[200px] overflow-y-auto">
                      {doctors.map((doctor, index) => {
                        
                        return (
                          <ListItem key={index} Button onClick={()=>navigateToAppointment(doctor._id)}>
                            <ListItemPrefix >⚕️</ListItemPrefix>
                            <div>
                              <Typography variant="h6" color="blue-gray">
                                {doctor.name}
                              </Typography>

                              <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                              >
                                <div className="flex gap-14"> 
                                <div>
                                {doctor.specialisation} 
                                </div>
                                <Button className="bg-brown-300">Book Appointment</Button>
                                </div>
                                           
                              </Typography>
                            </div>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Card>
                </div>

                <div>
               
                </div>


                

              </div>
              
            </div>
      
    </Layout>
  );
  };

export default PatientDashboard;
