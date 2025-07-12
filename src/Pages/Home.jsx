import React from "react";
import { useLoaderData } from "react-router";
import Banner from "../Components/Banner";
import TrandingApps from "../Components/TrandingApps";
import ProductivityApps from "../Components/ProductivityApps";

const Home = () => {
  const data = useLoaderData();
  //   console.log(data);
  return (
    <div>
      <section className="max-w-11/12 mx-auto">
        <Banner></Banner>
      </section>

      <TrandingApps data={data}></TrandingApps>

      <ProductivityApps></ProductivityApps>
    </div>
  );
};

export default Home;
