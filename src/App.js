import "./App.css";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Contactus from "./Component/Contactus";
import About from "./Component/About";
import Home from "./Component/Home ";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
      </Routes>
    </>
  );
}

export default App;
