import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Layouts/Home";
import CreatePlan from "./Modules/Pages/create-plan/CreatePlan";
import ViewAllPlans from "./Modules/Pages/View-Plan/ViewAllPlans";
import EditPlan from "./Modules//Pages/Edit-Plan/EditPlan";
import Report from "./Modules/Pages/create-plan/Report";
import TestComponent from "./Modules/Pages/Test/TestComponent";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/reports"} element={<Report />} />
          <Route path={"/test"} element={<TestComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
