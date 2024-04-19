import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel
} from "@material-tailwind/react";
import PatientSignUp from "./patientSignup";
import DoctorSignUp from "./doctorSignup";
import StaffSignUp from "./staffSignup";

export default function SignUpForm() {
  const data = [
    {
      label: "Doctor",
      value: "doctor",
      desc: <DoctorSignUp/>,
    },
    {
      label: "Patient",
      value: "patient",
      desc: <PatientSignUp/>,
    },
    {
      label: "Staff",
      value: "staff",
      desc: <StaffSignUp/>,
    }
  ];
  return (
    <div className="w-2/5 mx-auto text-xl mt-6 ">
      <div className="text-center mb-4 text-red-300">Login As an Admin to Register New Users</div>
      <Tabs value="html">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </div>
  );
}
