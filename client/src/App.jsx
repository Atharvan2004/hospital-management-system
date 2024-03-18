import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import "./core-ui/App.css";
import About from "./pages/About";
import Policy from "./pages/Policy";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/policy" element={<Policy/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
