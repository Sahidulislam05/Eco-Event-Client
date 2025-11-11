import React, { use, useState } from "react";
import AuthContext from "../../Provider/Authcontext";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";

const CreateEvent = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [eventDate, setEventDate] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedDate = eventDate
      ? eventDate.toISOString().split("T")[0]
      : null;
    const formData = {
      title: e.target.title.value,
      description: e.target.description.value,
      eventType: e.target.eventType.value,
      thumbnail: e.target.thumbnail.value,
      location: e.target.location.value,
      eventDate: formattedDate,
      creatorEmail: user?.email,
      creatorName: user?.displayName,
    };
    // console.log(formData);

    const today = new Date();
    if (new Date(eventDate) <= today) {
      Swal.fire({
        icon: "error",
        title: "Invalid Date!",
        text: "Please select a future date for the event.",
      });
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/events/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire({
          title: "Event created successfully!",
          icon: "success",
          timer: 1500,
          draggable: true,
        });

        setTimeout(() => {
          navigate("/upcoming-events");
        }, 1500);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Network Error!",
        text: "Failed to connect to server.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-base-200 to-base-300 flex items-center justify-center py-10">
      <title>Create Event</title>
      <div className="card w-full max-w-lg shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body space-y-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-4">
            Create New Event
          </h2>

          <div className="form-control">
            <label className="label font-semibold">Event Title</label>
            <input
              type="text"
              name="title"
              className="input input-bordered w-full"
              placeholder="Enter event title"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Description</label>
            <textarea
              name="description"
              className="textarea textarea-bordered w-full h-28 resize-none"
              placeholder="Write a short description..."
              required
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label font-semibold">Event Type</label>
            <select
              name="eventType"
              className="select select-bordered appearance-none w-full"
              required
            >
              <option disabled selected>
                Select a category
              </option>
              <option>Cleanup</option>
              <option>Plantation</option>
              <option>Donation</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label font-semibold">Image URL</label>
            <input
              type="text"
              name="thumbnail"
              className="input input-bordered w-full"
              placeholder="Paste image URL here"
              required
            />
          </div>

          <div className="form-control">
            <label className="label font-semibold">Location</label>
            <input
              type="text"
              name="location"
              className="input input-bordered w-full"
              placeholder="Event location"
              required
            />
          </div>

          <div className="form-control flex flex-col gap-2">
            <label className="label font-semibold">Event Date</label>

            <DatePicker
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              minDate={new Date()}
              placeholderText="Select a future date"
              className="input input-bordered w-full"
              dateFormat={"yyyy-MM-dd"}
              required
            ></DatePicker>
          </div>

          <button className="btn btn-primary w-full mt-4 hover:scale-105 transition-transform duration-200">
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
