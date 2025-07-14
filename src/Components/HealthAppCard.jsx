import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const HealthAppCard = ({ healthApp }) => {
  const { name, downloads, rating, thumbnail, id } = healthApp;
  return (
    <Link
      to={`/healthAppDetails/${id}`}
      className="flex items-center shadow p-4 justify-between rounded-md"
    >
      <div>
        <img className="w-30 rounded-2xl h-30" src={thumbnail} alt="" />
      </div>
      <div>
        <h2 className="font-bold">{name}</h2>
        <p>downloads : {downloads}</p>
        <p className="flex gap-5 items-center">
          {rating}{" "}
          <span className="text-amber-500 font-bold">
            {" "}
            <CiStar size={25} />
          </span>
        </p>
      </div>
    </Link>
  );
};

export default HealthAppCard;
