import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../component/Dashboard";
import IndividualItem from "../component/IndividualItem";
import PrivateRoutes from "./PrivateRoutes";

export const PublicRoutes = () => {
 
  return (
    // <div className="cover">
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/item/:id" element={<IndividualItem/>}/>
            </Route>
        </Routes>
    // </div>
  );
};
