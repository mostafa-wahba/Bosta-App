import React from "react";
import TrackingService from "../Components/TrackingService/TrackingService";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="gap-5 flex flex-col relative">
      <Navbar/>
      <Outlet/>
    </div>
  );
}
