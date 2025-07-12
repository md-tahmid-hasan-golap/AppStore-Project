import React from "react";
import TrandingAppCard from "./TrandingAppCard";

const TrandingApps = ({ data }) => {
  console.log(data);
  return (
    <div className="max-w-11/12 mx-auto py-6">
      <h2 className="text-3xl font-bold py-5">Tranding apps</h2>
      <div className="grid grid-cols-3 gap-7">
        {data.map((TrandingApps) => (
          <TrandingAppCard
            key={TrandingApps.id}
            TrandingApps={TrandingApps}
          ></TrandingAppCard>
        ))}
      </div>
    </div>
  );
};

export default TrandingApps;
