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
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value.trim();
    const description = e.target.description.value.trim();
    const eventType = e.target.eventType.value;
    const thumbnail = e.target.thumbnail.value.trim();
    const location = e.target.location.value.trim();
    const formattedDate = eventDate
      ? eventDate.toISOString().split("T")[0]
      : null;

    // Validation
    const newErrors = {};
    if (!title) newErrors.title = "Event title is required.";
    if (!description) newErrors.description = "Description is required.";
    if (!eventType || eventType === "Select a category")
      newErrors.eventType = "Please select an event type.";
    if (!thumbnail) newErrors.thumbnail = "Image URL is required.";
    if (!location) newErrors.location = "Location is required.";
    if (!eventDate) newErrors.eventDate = "Please select a valid event date.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      Swal.fire({
        icon: "error",
        title: "Validation Error!",
        text: "Please fill in all required fields correctly.",
      });
      return;
    }

    // Invalid date check
    const today = new Date();
    if (new Date(eventDate) <= today) {
      Swal.fire({
        icon: "error",
        title: "Invalid Date!",
        text: "Please select a future date for the event.",
      });
      return;
    }

    const formData = {
      title,
      description,
      eventType,
      thumbnail,
      location,
      eventDate: formattedDate,
      creatorEmail: user?.email,
      creatorName: user?.displayName,
    };

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
      <div className="card w-full max-w-lg shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body space-y-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-4">
            Create New Event
          </h2>

          {/* Title */}
          <div className="form-control">
            <label className="label font-semibold">Event Title</label>
            <input
              type="text"
              name="title"
              className={`input input-bordered w-full ${
                errors.title ? "input-error" : ""
              }`}
              placeholder="Enter event title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label font-semibold">Description</label>
            <textarea
              name="description"
              className={`textarea textarea-bordered w-full h-28 resize-none ${
                errors.description ? "textarea-error" : ""
              }`}
              placeholder="Write a short description..."
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>

          {/* Event Type */}
          <div className="form-control">
            <label className="label font-semibold">Event Type</label>
            <select
              name="eventType"
              className={`select select-bordered appearance-none w-full ${
                errors.eventType ? "select-error" : ""
              }`}
            >
              <option disabled selected>
                Select a category
              </option>
              <option>Cleanup</option>
              <option>Plantation</option>
              <option>Donation</option>
            </select>
            {errors.eventType && (
              <p className="text-red-500 text-sm">{errors.eventType}</p>
            )}
          </div>

          {/* Image URL */}
          <div className="form-control">
            <label className="label font-semibold">Image URL</label>
            <input
              type="text"
              name="thumbnail"
              className={`input input-bordered w-full ${
                errors.thumbnail ? "input-error" : ""
              }`}
              placeholder="Paste image URL here"
            />
            {errors.thumbnail && (
              <p className="text-red-500 text-sm">{errors.thumbnail}</p>
            )}
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label font-semibold">Location</label>
            <input
              type="text"
              name="location"
              className={`input input-bordered w-full ${
                errors.location ? "input-error" : ""
              }`}
              placeholder="Event location"
            />
            {errors.location && (
              <p className="text-red-500 text-sm">{errors.location}</p>
            )}
          </div>

          {/* Event Date */}
          <div className="form-control flex flex-col gap-2">
            <label className="label font-semibold">Event Date</label>
            <DatePicker
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              minDate={new Date()}
              placeholderText="Select a future date"
              className={`input input-bordered w-full ${
                errors.eventDate ? "input-error" : ""
              }`}
              dateFormat={"yyyy-MM-dd"}
            ></DatePicker>
            {errors.eventDate && (
              <p className="text-red-500 text-sm">{errors.eventDate}</p>
            )}
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
