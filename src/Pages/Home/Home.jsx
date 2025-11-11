import React from "react";
import Slider from "../../Components/Slider/Slider";
import NewsLetter from "../../Components/NewsLetter";
import Gallery from "../../Components/Gallery";
import FeaturesSection from "../../Components/FeaturesSection";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      {/* Hero Text Section */}
      <div className="text-center mt-10 mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-blue-600">
          Together for a Better Tomorrow
        </h1>
        <p className="text-lg text-gray-600 mt-3">
          Join community events and make a real difference today.
        </p>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Banner / Slider */}
      <section className="mb-12">
        <Slider />
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <FeaturesSection />
      </section>

      {/* Gallery Section */}
      <section className="mb-12">
        <Gallery />
      </section>

      {/* Newsletter Section */}
      <section className="mb-20">
        <NewsLetter />
      </section>
    </div>
  );
};

export default Home;
