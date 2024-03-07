import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container py-3 mx-auto flex-grow">
        <Outlet />
        <ToastContainer />
      </main>
      <Footer />
    </div>
  );
};

export default App;
