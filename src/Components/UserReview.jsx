import React from "react";
import { FaStar } from "react-icons/fa";

const UserReview = ({ review }) => {
  const { comment, rating, user } = review;
  return (
    <div>
      <div className="shadow p-4 rounded-md">
        <h2 className="font-bold">{user}</h2>
        <p className="text-green-500">{comment}</p>
        <p className=" flex justify-end gap-1">
          Rating: {rating}{" "}
          <span>
            <FaStar className="text-amber-500" size={20} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserReview;
