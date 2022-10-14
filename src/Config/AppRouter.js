import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Notifications from "../Pages/Notifications";
import Message from "../Pages/Message";
import Feedback from "../Pages/Feedback";
import NotFound from "../Pages/NotFound";
import Dashboard from "../Pages/Dashboard";

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
