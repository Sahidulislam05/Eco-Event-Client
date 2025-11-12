import React, { useState, useContext } from "react";
import AuthContext from "../../Provider/Authcontext";
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name?.value.trim();
    const email = e.target.email?.value.trim();
    const password = e.target.password?.value.trim();
    const photo = e.target.photo?.value.trim();

    const newErrors = {};

  
    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!photo) newErrors.photo = "Photo URL is required.";


    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#?!@$%^&*])[A-Za-z\d#?!@$%^&*]{6,}$/;

    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must include uppercase, lowercase, number, special character and be 6+ characters long.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please correct the highlighted errors.");
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

        toast.success("Registration Successful!");
        navigate("/");
      })
      .catch((e) => {
        const errorMessages = {
          "auth/email-already-in-use": "This email is already registered.",
          "auth/invalid-email": "Please enter a valid email address.",
          "auth/operation-not-allowed":
            "Email/password accounts are not enabled.",
          "auth/weak-password": "The password is too weak.",
          "auth/user-disabled": "This user account has been disabled.",
          "auth/too-many-requests":
            "Too many attempts. Please try again later.",
          "auth/network-request-failed":
            "Network error. Please check your internet.",
        };
        toast.error(errorMessages[e.code] || e.message || "Unknown error");
      });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden py-12">
        <title>Register</title>
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
                className={`w-full px-4 py-2 rounded-lg bg-white/20 border ${
                  errors.name ? "border-red-500" : "border-white/30"
                } placeholder-gray-300 text-white focus:ring-2 focus:ring-indigo-400 outline-none`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                className={`w-full px-4 py-2 rounded-lg bg-white/20 border ${
                  errors.email ? "border-red-500" : "border-white/30"
                } placeholder-gray-300 text-white focus:ring-2 focus:ring-indigo-400 outline-none`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Photo URL */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                className={`w-full px-4 py-2 rounded-lg bg-white/20 border ${
                  errors.photo ? "border-red-500" : "border-white/30"
                } placeholder-gray-300 text-white focus:ring-2 focus:ring-indigo-400 outline-none`}
                placeholder="Link to your avatar"
              />
              {errors.photo && (
                <p className="text-red-400 text-xs mt-1">{errors.photo}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <label className="block text-sm font-semibold mb-1">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                className={`w-full px-4 py-2 rounded-lg bg-white/20 border ${
                  errors.password ? "border-red-500" : "border-white/30"
                } placeholder-gray-300 text-white focus:ring-2 focus:ring-indigo-400 outline-none`}
                placeholder="Enter your password"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-4 top-9 cursor-pointer text-gray-300 hover:text-indigo-400"
              >
                {show ? <FaEye size={18} /> : <IoEyeOff size={18} />}
              </span>
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">{errors.password}</p>
              )}
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
