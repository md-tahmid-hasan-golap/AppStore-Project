import React from "react";
import ProductCard from "./ProductCard";

const ProductivityApps = ({ ProductivityData }) => {
  return (
    <div className="max-w-11/12 mx-auto py-7">
      <h2 className="text-3xl font-bold pb-5">Productivity apps</h2>
      <div className="grid grid-cols-3 gap-10">
        {ProductivityData.map((produtApp) => (
          <ProductCard key={produtApp.id} produtApp={produtApp}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductivityApps;
