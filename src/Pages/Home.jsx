import React from "react";
import { useLoaderData } from "react-router";
import Banner from "../Components/Banner";
import TrandingApps from "../Components/TrandingApps";
import ProductivityApps from "../Components/ProductivityApps";
import EducationApps from "../Components/EducationApps";
import HealthApps from "../Components/HealthApps";

const Home = () => {
  const { trendingData, ProductivityData, EducationData, helthData } =
    useLoaderData();

  //   console.log(data);
  return (
    <div>
      <section className="max-w-11/12 mx-auto">
        <Banner></Banner>
      </section>

      <TrandingApps data={trendingData}></TrandingApps>

      <ProductivityApps ProductivityData={ProductivityData}></ProductivityApps>
      <EducationApps EducationData={EducationData}></EducationApps>
      <HealthApps helthData={helthData}></HealthApps>
    </div>
  );
};

export default Home;
