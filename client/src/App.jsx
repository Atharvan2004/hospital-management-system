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
import PatientDashboard from "./pages/PatientDashboard";
import SearchResult from "./components/SearchResult";

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
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
