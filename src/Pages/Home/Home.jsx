import React from "react";
import Slider from "../../Components/Slider/Slider";
import NewsLetter from "../../Components/NewsLetter";
import Gallery from "../../Components/Gallery";
import FeaturesSection from "../../Components/FeaturesSection";
import Reveal from "../../Components/Reveal";
import Banner from "../../Components/Banner";

const Home = () => {
  return (
    <div className="mx-auto">
      <Banner></Banner>
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
        <section className="mb-20 mt-8">
          <NewsLetter />
        </section>
      </Reveal>
    </div>
  );
};

export default Home;
