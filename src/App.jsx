import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Emails from "./pages/Emails";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Vote from "./pages/Vote";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <Router basename="/myPisces">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/emails" element={<Emails />} />
      </Routes>
    </Router>
  );
}

export default App;
