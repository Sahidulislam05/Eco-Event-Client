import { useLoaderData } from "react-router";
import EventsCard from "../../Components/EventCard/EventsCard";

const UpcomingEvents = () => {
  const data = useLoaderData();

  // console.log(data);
  return (
    <div className="w-11/12 max-w-7xl mx-auto my-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500/90 text-center mb-10">
        Upcoming events
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.length > 0 ? (
          data.map((event) => <EventsCard key={event._id} event={event} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No upcoming events found.
          </p>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
