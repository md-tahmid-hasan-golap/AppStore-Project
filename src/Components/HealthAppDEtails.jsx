import React, { useState, useRef } from "react";
import { CiStar } from "react-icons/ci";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useLoaderData, useParams } from "react-router";
import YourReview from "./YourReview";
import UserReview from "./UserReview";

const HealthAppDetails = () => {
  const [installed, setInstalled] = useState(false);
  const [reviews, setReviews] = useState([]);

  const data = useLoaderData();
  const { id } = useParams();

  const appsStore = data.find((singleApp) => singleApp.id === id);
  const { name, banner, rating, downloads, description, features } = appsStore;

  const reviewsRef = useRef(null);

  const handleToggle = () => {
    setInstalled(!installed);
    if (!installed && reviewsRef.current) {
      reviewsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const addReview = (newReview) => {
    setReviews((prev) => [...prev, newReview]);
  };

  return (
    <div className="max-w-11/12 mx-auto py-7">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Details Section */}
        <div className="space-y-4 flex-1">
          <h2 className="font-bold text-4xl text-blue-600">{name}</h2>
          <p>Downloads: {downloads}</p>
          <p className="flex items-center gap-2 font-bold">
            Rating: {rating} <CiStar size={25} className="text-amber-500" />
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
          <p className="text-gray-700 w-full md:w-[600px] text-center mt-5">
            <span className="text-black font-bold">Description: </span>
            {description}
          </p>
          <div>
            <h2 className="font-bold pb-3 text-2xl mt-10">
              Features of this app
            </h2>
            {features.map((feature, idx) => (
              <p key={idx} className="pl-10 flex items-center gap-2">
                <IoIosCheckmarkCircle className="text-green-600" />
                {feature}
              </p>
            ))}
          </div>
        </div>

        {/* Banner Image */}
        <div className="flex-shrink-0">
          <img
            className="w-[500px] h-[300px] rounded-4xl object-cover"
            src={banner}
            alt={name}
          />
        </div>
      </div>

      {/* Reviews Section */}
      <div ref={reviewsRef} className="mt-14 w-full">
        <h2 className="text-3xl font-bold mb-6">User Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
          {reviews.length > 0 ? (
            reviews.map((review, idx) => (
              <UserReview key={idx} review={review} />
            ))
          ) : (
            <p className="text-gray-500">
              No reviews yet. Be the first to review!
            </p>
          )}
        </div>

        {/* YourReview Form */}
        <YourReview addReview={addReview} />
      </div>
    </div>
  );
};

export default HealthAppDetails;
