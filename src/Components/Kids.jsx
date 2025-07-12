import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Kids = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <div className="py-10 max-w-11/12 mx-auto">
        <div
          className="hero min-h-screen "
          style={{
            backgroundImage:
              "url(https://i.ibb.co/SwvHbymN/5f357be1-9ee9-44c6-a861-ee64f338f03d.jpg)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <div>
                <h2 className="text-4xl font-bold mb-4">Welcome to AppStore</h2>
                <p className="text-lg max-w-xl">
                  Discover amazing apps and enhance your experience with our
                  latest collection. Explore now!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Kids;
