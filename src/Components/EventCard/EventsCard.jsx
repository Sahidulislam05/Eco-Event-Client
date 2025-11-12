import { Link } from "react-router";
import Reveal from "../Reveal";

const EventsCard = ({ event }) => {
  const { title, description, eventType, location, eventDate, _id, thumbnail } =
    event;
  return (
    <Reveal>
      <div className="card bg-base-200 shadow-sm h-[500px] hover:scale-105 transition ease-in-out rounded-2xl ">
        <figure>
          <img
            src={thumbnail}
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
    </Reveal>
  );
};

export default EventsCard;
