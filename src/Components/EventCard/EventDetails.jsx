import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import AuthContext from "../../Provider/Authcontext";

const EventDetails = () => {
  const event = useLoaderData();
  const { user, loading, setLoading } = use(AuthContext);
  const [alreadyJoined, setAlreadyJoined] = useState(false);

  const {
    title,
    description,
    eventType,
    location,
    eventDate,
    creatorEmail,
    creatorName,
  } = event;

  useEffect(() => {
    const checkJoined = async () => {
      if (user?.email) {
        try {
          const res = await fetch(
            `http://localhost:3000/joined-events?email=${user.email}&eventId=${event._id}`
          );
          const data = await res.json();
          if (data.alreadyJoined) {
            setAlreadyJoined(true);
          }
        } catch (error) {
          console.error("Check join error:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    checkJoined();
  }, [user, event._id, setLoading]);

  const handleJoinEvent = async () => {
    if (!user?.email) {
      Swal.fire({
        icon: "error",
        title: "Login required",
        text: "Please login to join this event.",
      });
      return;
    }

    const joinedEvent = {
      eventId: event._id,
      title: event.title,
      thumbnail: event.thumbnail,
      eventDate: event.eventDate,
      location: event.location,
      userEmail: user.email,
    };

    try {
      const res = await fetch("http://localhost:3000/joined-events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(joinedEvent),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Joined Successfully!",
          timer: 1500,
        });
        setAlreadyJoined(true);
      } else {
        Swal.fire({
          icon: "error",
          title: data.message || "Failed to join!",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Network Error!",
        text: "Could not connect to server.",
      });
    }
  };

  return (
    <div className="w-1/2 mx-auto">
      <div className="card bg-base-100 shadow-sm h-[500px] my-10">
        <figure>
          <img
            src={
              event.thumbnail ||
              "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            alt="Event Thumbnail"
            className="object-cover w-full h-64 overflow-hidden"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions overflow-hidden flex flex-wrap gap-2">
            <div className="badge badge-outline">By: {creatorName}</div>
            <div className="badge badge-outline">{creatorEmail}</div>
            <div className="badge badge-outline">Type: {eventType}</div>
            <div className="badge badge-outline">{location}</div>
            <div className="badge badge-outline">{eventDate}</div>
          </div>

          <div className="card-actions justify-end mt-4">
            <button
              onClick={handleJoinEvent}
              className="btn btn-accent"
              disabled={alreadyJoined || loading}
            >
              {loading
                ? "Checking..."
                : alreadyJoined
                ? "Already Joined"
                : "Join Event"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
