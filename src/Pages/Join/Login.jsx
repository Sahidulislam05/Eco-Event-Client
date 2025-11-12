import React, { use, useState } from "react";
import AuthContext from "../../Provider/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser, setUser, googleLogin, email, setEmail } = use(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const emailValue = e.target.email?.value.trim();
    const passwordValue = e.target.password?.value;

    if (!emailValue) {
      setError("Email is required");
      return;
    }

    if (!passwordValue) {
      setError("Password is required");
      return;
    }

    // Reset previous error
    setError("");

    loginUser(emailValue, passwordValue)
      .then((res) => {
        setUser(res.user);

        toast.success("Login Successful");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  const handleGoogleSignIn = () => {
    googleLogin()
      .then((res) => {
        setUser(res.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        toast.error("Google login failed. Try again.");
      });
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden py-12">
        <title> Log In </title>
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

        <div className="relative z-10 w-[90%] sm:w-[420px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8 text-white">
          <h1 className="text-3xl font-bold text-center mb-6 text-indigo-300">
            Welcome Back 🌃
          </h1>

          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 text-white focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-4 top-9 cursor-pointer text-gray-300 hover:text-indigo-400"
              >
                {show ? <FaEye size={18} /> : <IoEyeOff size={18} />}
              </span>
            </div>

            {/* Error message below form */}
            {error && <p className="text-red-400 text-sm mb-2">{error}</p>}

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold text-white transition-all duration-300 shadow-md hover:shadow-indigo-500/40"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-2 my-6">
            <div className="flex-1 border-t border-white/30"></div>
            <span className="text-gray-400 text-sm">OR</span>
            <div className="flex-1 border-t border-white/30"></div>
          </div>

          {/* Google login */}
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>

          {/* Register link */}
          <p className="text-center text-sm mt-6 text-gray-300">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-400 hover:underline font-semibold"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
