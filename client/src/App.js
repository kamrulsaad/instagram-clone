import { Nav } from "./Components/Shared/Navbar";
import { Routes, Route } from "react-router-dom"
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import Home from "./Components/Home/Home";
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-slate-50">
      <Nav></Nav>
      <Routes>
        <Route index element={<Home></Home>}></Route>
        <Route path="/signin" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer position="top-left" transition={Slide}></ToastContainer>
    </div>
  );
}

export default App;
