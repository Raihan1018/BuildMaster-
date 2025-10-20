import React from "react";
import TopHeader from "../components/TopHeader/TopHeader";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="container mx-auto max-w-screen-2xl flex flex-col">
      <TopHeader />
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
