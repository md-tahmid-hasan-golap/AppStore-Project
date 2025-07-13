import React from "react";
import { useLoaderData, useParams } from "react-router";

const TrendingAppDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  console.log(data, id);
  return (
    <div>
      <h2>Trending details</h2>
    </div>
  );
};

export default TrendingAppDetails;
