import "./App.css";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Buynow from "./components/buynow/Buynow";
import Navbar from "./components/Header/Navbar";
import MainComponent from "./components/Home/MainComponent";
import Sign_in from "./components/SignUp_SignIn/Sign_in";
import Sign_up from "./components/SignUp_SignIn/Sign_up";
import NewNav from "./components/newNavbar/NewNav";
import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, []);
  return (
    <>
      {data ? (
        <>
          <Navbar />
          <NewNav />
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/login" element={<Sign_in />} />
            <Route path="/register" element={<Sign_up />} />
            <Route path="/getproductsone/:id" element={<Cart />} />
            <Route path="/buynow" element={<Buynow />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <div className="circle">
          <CircularProgress />
          <h2>Loading</h2>
        </div>
      )}
    </>
  );
}

export default App;
