import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ErrorImg from "../assets/198d5469-4909-4bf5-ba7a-4ef955bd82e6.jpg";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      {/* <header>
        <Navbar></Navbar>
      </header> */}
      <section className="flex justify-center ">
        <img className="h-[300px]" src={ErrorImg} alt="" />
      </section>
      {/* <footer>
        <Footer></Footer>
      </footer> */}
      <Link className="flex justify-center" to="/">
        <button className="btn btn-wide">Back To Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
