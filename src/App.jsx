import React from "react";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="container py-3 mx-auto flex-grow">
            fdhedhfbdhfhdvbh
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
