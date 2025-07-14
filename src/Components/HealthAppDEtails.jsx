import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useLoaderData, useParams } from "react-router";

const HealthAppDEtails = () => {
  const [installed, setInstalled] = useState(false);

  const handleToggle = () => {
    setInstalled(!installed);
  };
  const data = useLoaderData();
  const { id } = useParams();

  const appsStore = data.find((singleApp) => singleApp.id === id);
  const { name, banner, rating, downloads, description } = appsStore;
  return (
    <div className="max-w-11/12 mx-auto py-7">
      {/* parent div */}
      <div className="flex justify-between">
        {/* text div */}
        <div className="space-y-2">
          <h2 className="font-bold text-4xl text-blue-600">{name}</h2>
          <p>downloads : {downloads}</p>
          <p className="flex gap-10">
            rating :{" "}
            <p className="flex gap-6 items-center font-bold">
              {rating}{" "}
              <span className="text-amber-500 font-bold">
                {" "}
                <CiStar size={25} />
              </span>
            </p>
          </p>
          <button
            onClick={handleToggle}
            className={`px-5 py-2 mt-10 rounded-md text-white font-semibold transition duration-200 ${
              installed
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {installed ? "Uninstall" : "Install"}
          </button>
          <p className="text-amber-700 w-[600px] text-center">
            <span className="text-black font-bold">description :</span>{" "}
            {description}
          </p>
          <div>
            <h2 className="font-bold pb-3 text-2xl mt-10">
              Features of this app
            </h2>
            {appsStore.features.map((feature) => (
              <p className=" pl-10 flex gap-5">
                <p>
                  <IoIosCheckmarkCircle className="text-green-600" />
                </p>{" "}
                {feature}
              </p>
            ))}
          </div>
        </div>
        {/* Banner img div */}
        <div>
          <img
            className="w-[500px] h-[300px] rounded-4xl"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HealthAppDEtails;
