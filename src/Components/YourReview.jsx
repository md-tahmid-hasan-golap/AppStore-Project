import React, { useState } from "react";

const YourReview = ({ addReview }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }
    const newReview = {
      comment: reviewText,
      rating,
      user: "Anonymous", // চাইলে ইউজার নাম এড করতে পারিস
    };
    addReview(newReview);
    setReviewText("");
    setRating(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-11/12 mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Write Your Review</h2>

      <label className="block mb-2 font-semibold" htmlFor="review">
        Your Review:
      </label>
      <textarea
        id="review"
        rows="4"
        className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your review here..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        required
      ></textarea>

      <div className="mt-4">
        <label className="block mb-2 font-semibold">Rating:</label>
        <div className="flex gap-3">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              type="button"
              key={num}
              onClick={() => setRating(num)}
              className={`px-4 py-2 rounded-full border ${
                rating === num
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-blue-300"
              } transition`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
      >
        Submit Review
      </button>
    </form>
  );
};

export default YourReview;
