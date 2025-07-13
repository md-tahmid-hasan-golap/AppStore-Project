import React from "react";
import EducationAppCard from "./EducationAppCard";

const EducationApps = ({ EducationData }) => {
  //   console.log(EducationData);
  return (
    <div className="max-w-11/12 mx-auto my-7">
      <h2 className="font-bold text-3xl pb-5">Education apps</h2>
      <div className="grid grid-cols-3 gap-10">
        {EducationData.map((educationApp) => (
          <EducationAppCard
            key={educationApp.id}
            educationApp={educationApp}
          ></EducationAppCard>
        ))}
      </div>
    </div>
  );
};

export default EducationApps;
