import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import Profile from "./Components/Profile.jsx";
import "../App.css";
import CreateQuote from "./Components/CreateQuote.jsx";
import Home from "./Components/Home.jsx";
import Navbar from "./Components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/createquote" element={<CreateQuote />} />
      </Routes>
    </>
  );
}

export default App;
