import React from "react";
import Slider from "../../Components/Slider/Slider";
import NewsLetter from "../../Components/NewsLetter";
import Gallery from "../../Components/Gallery";
import FeaturesSection from "../../Components/FeaturesSection";
import Reveal from "../../Components/Reveal";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="text-center mt-10 mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-blue-600">
          Together for a Better Tomorrow
        </h1>
        <p className="text-lg text-gray-600 mt-3">
          Join community events and make a real difference today.
        </p>
        <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <Reveal>
        {/* Banner / Slider */}
        <section className="mb-12">
          <Slider />
        </section>
      </Reveal>
      <Reveal>
        {/* Features Section */}
        <section className="mb-12">
          <FeaturesSection />
        </section>
      </Reveal>
      <Reveal>
        {/* Gallery Section */}
        <section className="mb-12">
          <Gallery />
        </section>
      </Reveal>
      <Reveal>
        {/* Newsletter Section */}
        <section className="mb-20">
          <NewsLetter />
        </section>
      </Reveal>
    </div>
  );
};

export default Home;
