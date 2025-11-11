import React, { use, useState } from "react";
import AuthContext from "../../Provider/Authcontext";
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUser, setUser } = use(AuthContext);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const photo = e.target.photo?.value;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*])[A-Za-z\d#?!@$%^&*]{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters long, and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((e) => {
            toast.error(e.code);
            setUser(user);
          });
        toast.success("Registration Successful");
        navigate("/");
      })
      .catch((e) => {
        if (e.code === "auth/email-already-in-use") {
          toast("This email address is already in use.");
        } else if (e.code === "auth/invalid-email") {
          toast("The email address is badly formatted.");
        } else if (e.code === "auth/operation-not-allowed") {
          toast(
            "Email/password accounts are not enabled. Please contact support."
          );
        } else if (e.code === "auth/weak-password") {
          toast("The password is too weak. Please choose a stronger password.");
        } else if (e.code === "auth/user-disabled") {
          toast("This user account has been disabled.");
        } else if (e.code === "auth/too-many-requests") {
          toast("Too many attempts. Please try again later.");
        } else if (e.code === "auth/network-request-failed") {
          toast("Network error. Please check your internet connection.");
        } else {
          console.error("Unhandled auth error", e);
          toast("An unexpected error occurred: " + (e.message || e.code));
        }
      });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden py-12">
        <title> Register </title>
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

        <div className="relative z-10 w-[90%] sm:w-[420px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8 text-white">
          <h2 className="font-bold text-3xl text-center text-indigo-300 mb-6">
            Create Your Account
          </h2>
          <p className="text-center text-gray-300 text-sm mb-6">
            Join the{" "}
            <span className="text-indigo-400 font-semibold">EcoEvent</span>{" "}
            community
          </p>

          <form onSubmit={handleRegister}>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Your full name"
                required
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Photo URL */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Link to your avatar"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <label className="block text-sm font-semibold mb-1">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter your password"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-4 top-9 cursor-pointer text-gray-300 hover:text-indigo-400"
              >
                {show ? <FaEye size={18} /> : <IoEyeOff size={18} />}
              </span>
            </div>

           
            <button
              type="submit"
              className="w-full py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold text-white transition-all duration-300 shadow-md hover:shadow-indigo-500/40"
            >
              Register
            </button>

            
            <p className="text-center text-sm mt-4 text-gray-300">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-400 hover:underline font-semibold"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
