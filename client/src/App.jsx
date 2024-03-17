import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import "./core-ui/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
