import React from "react";
import HealthAppCard from "./HealthAppCard";

const HealthApps = ({ helthData }) => {
  console.log(helthData);
  return (
    <div className="max-w-11/12 mx-auto py-7">
      <h2 className="text-3xl font-bold pb-5">Health apps</h2>
      <div className="grid grid-cols-3 gap-10">
        {helthData.map((healthApp) => (
          <HealthAppCard
            key={healthApp.id}
            healthApp={healthApp}
          ></HealthAppCard>
        ))}
      </div>
    </div>
  );
};

export default HealthApps;
