import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Routes, Route, useNavigate, Router } from "react-router-dom";
import About from "./pages/About";
import Contact from './pages/Contact';
import { Link } from 'react-router-dom';
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import NotFound from "./components/NotFound";
import JobsLayout from "./layout/JobsLayout";
import Jobs, { jobsLoader } from "./pages/Jobs";
import JobDetails from "./components/JobDetails";
import { Outlet } from "react-router-dom";

const App = () => {


  
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactLayout />}>
            <Route path="info" element={<ContactInfo />} />
            <Route path="form" element={<ContactForm />} />
          </Route>
          
          <Route path="jobs"  element={<JobsLayout/>}>
        <Route index element = {<Jobs/>} loader={jobsLoader}/>
     
        <Route path=":id" element={<JobDetails/>} />
          </Route>
      
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
