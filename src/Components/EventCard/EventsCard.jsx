import { Link } from "react-router";

const EventsCard = ({ event }) => {
  const { title, description, eventType, location, eventDate, _id, thumbnail } =
    event;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm h-[500px]  hover:scale-105 transition ease-in-out">
        <figure>
          <img
            src={
              thumbnail ||
              "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            }
            alt="Event Thumbnail"
            className="object-cover w-full h-48 overflow-hidden"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions overflow-hidden">
            <div className="badge badge-outline">Event type: {eventType} </div>
            <div className="badge badge-outline">{location} </div>
            <div className="badge badge-outline">{eventDate} </div>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/event-details/${_id}`} className="btn btn-primary ">
              View event
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
