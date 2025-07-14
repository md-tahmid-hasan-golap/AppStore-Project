import React from "react";
import { useLoaderData, useParams } from "react-router";

const TrendingAppDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const appsStore = data.find((singleApp) => singleApp.id === id);
  console.log(appsStore);
  console.log(data, id);

  return (
    <div className="max-w-11/12 mx-auto">
      <h2>{appsStore.name}</h2>
    </div>
  );
};

export default TrendingAppDetails;
