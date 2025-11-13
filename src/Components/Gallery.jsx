import React from "react";

const Gallery = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-5">
        Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 w-full">
        <img
          src="https://i.ibb.co.com/WW4R2HfK/istockphoto-1077156290-612x612.jpg"
          alt="NOT FOUND"
          className="rounded-xl"
        />
        <img
          src="https://i.ibb.co.com/LzV69Xqs/full-shot-people-collecting-garbage-23-2149181972.jpg"
          alt="NOT FOUND"
          className="rounded-xl"
        />
        <img
          src="https://i.ibb.co.com/Tx6hhV35/istockphoto-1498170916-612x612.jpg"
          alt="NOT FOUND"
          className="rounded-xl"
        />
        <img
          src="https://i.ibb.co.com/LXw336Dw/group-volunteer-cleaning-picking-plastic-600nw-2643490733.webp"
          alt="NOT FOUND"
          className="rounded-xl"
        />
        <img
          src="https://i.ibb.co.com/dsshhymK/istockphoto-1174781800-612x612.jpg"
          alt="NOT FOUND"
          className="rounded-xl"
        />
        <img
          src="https://i.ibb.co.com/s9h8qvp9/istockphoto-863105740-612x612.jpg"
          alt="NOT FOUND"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default Gallery;
