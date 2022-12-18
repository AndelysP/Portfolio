import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Welcome from './components/Welcome';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';


const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Welcome/>} />
            <Route path="/homepage" element={<Homepage/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Root