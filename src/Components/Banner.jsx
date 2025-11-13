import { Link } from "react-router";
import banner from "../../public/banner.jpg";

const Banner = () => {
  return (
    <section className="relative mx-auto h-[550px]">
      <div className="absolute inset-0">
        <img src={banner} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 md:px-0 animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Join Hands to Build a Better Community
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Create, join, and track social service events in your local area.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/upcoming-events"
            className="btn btn-primary btn-lg hover:scale-105 transition-transform duration-300"
          >
            Upcoming Events
          </Link>
          <Link
            to="/create-event"
            className="btn btn-secondary btn-lg hover:scale-105 transition-transform duration-300"
          >
            Create Event
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
