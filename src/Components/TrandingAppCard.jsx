import React from "react";

const TrandingAppCard = ({ TrandingApps }) => {
  const { rating, downloads, thumbnail, name } = TrandingApps;
  return (
    <div className="flex gap-5">
      <div>
        <img className="w-30 rounded-2xl h-30" src={thumbnail} alt="" />
      </div>
      <div>
        <h2>{name}</h2>
        <p>downloads : {downloads}</p>

        <p>{rating}</p>
      </div>
    </div>
  );
};

export default TrandingAppCard;
