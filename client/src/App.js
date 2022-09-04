import { Nav } from "./Components/Shared/Navbar";
import {Routes, Route} from "react-router-dom"
import Login from "./Components/Login/Login";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/signin" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
