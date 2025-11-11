import { FaCalendarAlt, FaUsers, FaLock, FaEdit } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaCalendarAlt className="text-4xl text-primary" />,
      title: "Create & Host Events",
      desc: "Easily create your own events with custom title, date, and location.",
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      title: "Join & Manage Events",
      desc: "Join interesting events and manage your joined activities easily.",
    },
    {
      icon: <FaEdit className="text-4xl text-primary" />,
      title: "Update & Delete Events",
      desc: "Edit event details or remove them anytime with full control.",
    },
    {
      icon: <FaLock className="text-4xl text-primary" />,
      title: "Secure Authentication",
      desc: "Your account and event data are protected with Firebase Authentication.",
    },
  ];

  return (
    <div className=" py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-primary mb-3">Our Features</h2>
        <p className="text-gray-600">
          Everything you need to organize and join amazing community events.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-11/12 mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-xl p-6 text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-500">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
