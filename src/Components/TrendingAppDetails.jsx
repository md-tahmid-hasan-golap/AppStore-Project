import React from "react";
import { useLoaderData, useParams } from "react-router";

const TrendingAppDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const numericId = parseInt(id);
  const appsStore = data.find((singleApp) => singleApp.numericId === numericId);
  console.log(appsStore);
  //

  console.log(data);
  return (
    <div>
      <h2>{appsStore.name}</h2>
    </div>
  );
};

export default TrendingAppDetails;
