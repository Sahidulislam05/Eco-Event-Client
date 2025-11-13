import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../../Provider/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSignOut = () => {
    logOut()
      .then(() => toast.success("LogOut Successful"))
      .catch((error) => toast.error(error.code));
  };

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 font-bold"
              : "font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/upcoming-events"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text border-purple-500 font-bold"
              : "font-semibold"
          }
        >
          Upcoming Events
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link className="text-xl md:text-2xl font-bold text-primary">
            Eco Event
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 space-x-2 text-xl">{links}</ul>
        </div>

        <div className="navbar-end gap-2">
          <input
            type="checkbox"
            className="toggle theme-controller"
            onChange={(e) => handleTheme(e.target.checked)}
            checked={theme === "dark"}
          />

          {user ? (
            <div className="flex items-center gap-2">
              <Link
                onClick={handleSignOut}
                to="/register"
                className="btn btn-primary"
              >
                Logout
              </Link>

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="Avatar" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
