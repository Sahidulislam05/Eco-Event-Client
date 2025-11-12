import React, { use, useEffect, useState } from "react";
import AuthContext from "../../Provider/Authcontext";
import Swal from "sweetalert2";
import { Link } from "react-router";
import Loading from "../../Components/Loading";

const ManageEvents = () => {
  const { user, loading, setLoading } = use(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://social-eco-event-server.vercel.app/my-events?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setEvents(data);
          setLoading(false);
        });
    }
  }, [user, setLoading]);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleDelete = (id) => {
    fetch(`https://social-eco-event-server.vercel.app/events/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setEvents(events.filter((e) => e._id !== id));
        Swal.fire({
          title: "Deleted Successfully",
          icon: "success",
          draggable: true,
        });
      });
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {events.map((event) => (
          <div className="card bg-base-100 shadow-sm h-[500px]  hover:scale-105 transition ease-in-out">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="NOT FOUND"
                className="object-cover w-full h-48 overflow-hidden"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{event.title}</h2>
              <p>{event.description}</p>
              <div className="card-actions overflow-hidden">
                <div className="badge badge-outline">
                  Event type: {event.eventType}{" "}
                </div>
                <div className="badge badge-outline">{event.location} </div>
                <div className="badge badge-outline">{event.eventDate} </div>
              </div>
              <div className="card-actions justify-end">
                <div className="flex gap-2 mt-2">
                  <Link
                    to={`/update-event/${event._id}`}
                    className="btn btn-warning"
                  >
                    Update event
                  </Link>
                  <button
                    className="btn btn-error"
                    onClick={() => handleDelete(event._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageEvents;
