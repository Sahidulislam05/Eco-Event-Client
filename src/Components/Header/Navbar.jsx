import React, { use } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../../Provider/Authcontext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { logOut, user } = use(AuthContext);
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 font-bold"
              : "font-semibold"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 font-bold"
              : "font-semibold"
          }
          to="/create-event"
        >
          Create Event
        </NavLink>
      </li> */}
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 font-bold"
              : "font-semibold"
          }
          to="/upcoming-events"
        >
          Upcoming Events
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 font-bold"
              : "font-semibold"
          }
          to="/joined-event"
        >
          Joined Event
        </NavLink>
      </li> */}

      {/* <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 font-bold"
              : "font-semibold"
          }
          to="/manage-events"
        >
          Manage Event
        </NavLink>
      </li> */}
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("LogOut Successful");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-xs md:text-2xl font-bold">EcoEvent</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 space-x-2 ">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <div>
              <Link
                onClick={handleSignOut}
                to="register"
                className="btn btn-primary mr-3"
              >
                Logout
              </Link>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="NOT FOUND" src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/create-event">Create Event</Link>
                  </li>
                  <li>
                    <Link to="/manage-events">Manage Events</Link>
                  </li>
                  <li>
                    <Link to="/joined-event">Joined Events</Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="/login" className="btn btn-accent">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
