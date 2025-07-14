import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useLoaderData, useParams } from "react-router";
import YourReview from "./YourReview";
import UserReview from "./UserReview";

const ProductivityDetails = () => {
  const [installed, setInstalled] = useState(false);
  const data = useLoaderData();
  const { id } = useParams();

  const appsStore = data.find((singleApp) => singleApp.id === id);
  const { name, banner, rating, downloads, description, features } = appsStore;

  // localStorage থেকে review লোড, না থাকলে appsStore থেকে নেয়া
  const [reviews, setReviews] = useState(() => {
    const stored = localStorage.getItem("reviews");
    if (stored) return JSON.parse(stored);
    return appsStore.reviews || [];
  });

  const handleToggle = () => {
    setInstalled(!installed);
  };

  // নতুন review যোগ করে localStorage এ সেভ
  const addReview = (newReview) => {
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  };

  return (
    <div className="max-w-11/12 mx-auto py-7">
      <div className="flex justify-between gap-10 flex-col lg:flex-row">
        {/* Text & details */}
        <div className="space-y-4">
          <h2 className="font-bold text-4xl text-blue-600">{name}</h2>
          <p>Downloads: {downloads}</p>
          <p className="flex gap-2 items-center">
            Rating:{" "}
            <span className="flex items-center font-bold text-amber-500">
              {rating} <CiStar size={22} />
            </span>
          </p>
          <button
            onClick={handleToggle}
            className={`px-5 py-2 mt-5 rounded-md text-white font-semibold transition duration-200 ${
              installed
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {installed ? "Uninstall" : "Install"}
          </button>
          <p className="text-gray-700 w-[600px]">
            <span className="text-black font-bold">Description:</span>{" "}
            {description}
          </p>

          <div>
            <h2 className="font-bold pb-3 text-2xl mt-10">
              Features of this app
            </h2>
            {features.map((feature, idx) => (
              <p key={idx} className="pl-6 flex items-center gap-2">
                <IoIosCheckmarkCircle className="text-green-600" />
                {feature}
              </p>
            ))}
          </div>
        </div>

        {/* Banner image */}
        <div>
          <img
            className="w-[500px] h-[300px] rounded-xl object-cover"
            src={banner}
            alt="app banner"
          />
        </div>
      </div>

      {/* User Reviews Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-4">User Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <UserReview key={idx} review={review} />
          ))}
        </div>

        {/* Add Your Review Form */}
        <div className="mt-10">
          <YourReview addReview={addReview} />
        </div>
      </div>
    </div>
  );
};

export default ProductivityDetails;
