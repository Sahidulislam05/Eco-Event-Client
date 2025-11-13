import React, { use, useEffect, useState } from "react";
import AuthContext from "../../Provider/AuthContext";

const JoinedEvent = () => {
  const { user } = use(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://social-eco-event-server.vercel.app/joined-events?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setEvents(data));
    }
  }, [user]);
  return (
    <div className=" bg-base-200 pb-10 md:pb-20">
      <div className="p-8 min-h-screen w-10/12 mx-auto ">
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">
          My Joined Events
        </h1>

        {events.length === 0 ? (
          <p className="text-center text-gray-500">
            You haven’t joined any event yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event._id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={event.thumbnail} alt={event.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{event.title}</h2>

                  <p className="text-sm text-gray-500">{event.description}</p>
                  <p className="text-sm text-gray-500">{event.location}</p>
                  <p className="badge badge-outline">
                    {new Date(event.eventDate).toLocaleDateString("en-GB")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinedEvent;
