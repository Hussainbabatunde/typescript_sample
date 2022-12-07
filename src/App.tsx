import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Person from './component/Person';
import PersonList from './component/PersonList';
import imglogo from "./component/imgwhole.jpg";
import { useDispatch } from 'react-redux';
import { RegisterAuth } from './state/auth';
import { AppDispatch } from './state/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { PublicRoutes } from './routes/PublicRoutes';

function App() {

  
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Login/>}/>
        <Route path="*" element={<PublicRoutes/>}/>
         </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
