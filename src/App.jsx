import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutus/AboutUs"
import ForHome from "./components/forhome/ForHome"
import ForBusiness from "./components/forbusiness/ForBusiness"
import BecomeAPartner from "./components/becomeapartner/BecomeAPartner"
import Resource from "./components/resource/Resource"
import ContactUs from "./components/contactus/ContactUs"
import GetQuote from "./components/getquote/GetQuote";

// icon color #2331BC

export default function App() {
  return (
    <div>
      <>
        <Navbar />
       
        <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/forhome' element={<ForHome />} />
        <Route path='/forbusiness' element={<ForBusiness />} />
        <Route path='/becomeapartner' element={<BecomeAPartner />} />
        <Route path='/resource' element={<Resource />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/getquote' element={<GetQuote /> } />


        </Routes>
 
      </>
    </div>
  );
}
