import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Policy from "./pages/Policy";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUpForm from "./components/Signup/SignupPage";
import LoginForm from "./components/Login/LoginPage";
import PatientDashboard from "./pages/Patient/PatientDashboard";
import SearchResult from "./components/SearchResult";
import Dprofile from "./pages/Doctor/Profile";
import Pprofile from "./pages/Patient/Profile";
import MedicineForms from "./pages/Staff/MedicineForms";
import Appointment from "./pages/Patient/Appointment";
import Report from "./pages/Doctor/Report";
import Sprofile from "./pages/Staff/Profile";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import StaffDashboard from "./pages/Dashboard.jsx/StaffDashboard";
import ReportDisplay from "./pages/Doctor/ReportDisplay";
import SearchPatient from "./pages/Doctor/SearchPatient";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/search" element={<SearchResult/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<SignUpForm/>} />
        <Route path="/policy" element={<Policy/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/patient" element={<PatientDashboard/>} />
        <Route path="/doctor-profile/:id" element={<Dprofile/>} />
        <Route path="/patient-profile/:id" element={<Pprofile/>} />
        <Route path="/staff-profile/:id" element={<Sprofile/>} />
        <Route path="/add-medicine" element={<MedicineForms/>} />
        <Route path="/appointment/:id" element={<Appointment/>} />
        <Route path="/create-report/:id" element={<Report />} />
        <Route path="/doctor-dash" element={<DoctorDashboard/>} />
        <Route path="/patient-dash" element={<PatientDashboard/>} />
        <Route path="/staff-dash" element={<StaffDashboard/>} />
        <Route path="/report-display/:id" element={<ReportDisplay/>} />
        <Route path="/search-patient" element={<SearchPatient/>} />

      </Routes>
      <Footer/>
      
    </BrowserRouter>
  );
}

export default App;