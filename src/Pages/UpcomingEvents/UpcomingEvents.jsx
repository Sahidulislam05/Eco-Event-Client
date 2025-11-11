import { useLoaderData } from "react-router";
import EventsCard from "../../Components/EventCard/EventsCard";
import { use, useState } from "react";
import AuthContext from "../../Provider/Authcontext";

const UpcomingEvents = () => {
  const data = useLoaderData();
  const { loading, setLoading } = use(AuthContext);
  const [events, setEvents] = useState(data);
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setLoading(true);
    fetch(`http://localhost:3000/search?search=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      });
  };
  return (
    <div className="w-11/12 max-w-7xl mx-auto my-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500/90 text-center mb-10">
        Upcoming events
      </h1>
      <div>
        <form onSubmit={handleSearch} className="flex gap-2 my-12">
          <label className="input rounded-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input name="search" type="search" placeholder="Search" />
          </label>
          <button className="btn btn-secondary rounded-full">
            {loading ? "Searching..." : "Search"}
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {events.map((event) => (
          <EventsCard key={event._id} event={event}></EventsCard>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
