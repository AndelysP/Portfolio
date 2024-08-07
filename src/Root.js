import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Waiting from "./components/Waiting";
// import NotFound from "./components/NotFound";
// import Project from './components/Project';
// import Contact from './components/Contact';

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Welcome />} />
        <Route path="/about" element={<Waiting />} /> */}
        {/* <Route path="/work" element={<Project />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<Waiting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root