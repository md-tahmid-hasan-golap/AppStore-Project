import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-xl shadow-xl mt-10">
      {/* Slide 01 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/wZGnscCy/Screenshot-2025-07-13-233041.png"
          className="w-full object-cover h-[300px]"
          alt="Promotion 1"
        />
        <div className="absolute flex items-center justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
          <a href="#slide3" className="btn btn-circle bg-gray-800 text-white">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-gray-800 text-white">
            ❯
          </a>
        </div>
        <div className="absolute bottom-5 left-5 text-white bg-black/50 p-3 rounded"></div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/1YD77d8Z/Screenshot-2025-07-13-232718.png"
          className="w-full object-cover h-[300px]"
          alt="Promotion 2"
        />

        <div className="absolute flex items-center justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
          <a href="#slide1" className="btn btn-circle bg-gray-800 text-white">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-gray-800 text-white">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/SwjJsZDg/Screenshot-2025-07-13-233237.png"
          className="w-full object-cover h-[300px]"
          alt="Promotion 3"
        />
        <div className="absolute flex items-center justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
          <a href="#slide2" className="btn btn-circle bg-gray-800 text-white">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-gray-800 text-white">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
