import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();
  const { register, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const errorMessage = (err) =>
    toast.error(err, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  async function handleRegister() {
    try {
      await register(email, password);
    } catch (error) {
      errorMessage(error.message);
    }
  }

  async function google() {
    try {
      await signInWithGoogle();
      nav("/");
    } catch (error) {
      errorMessage(error.message);
    }
  }

  return (
    <div className="mt-[50px]">
      <div className="container">
        <div className="w-[45%] flex items-center justify-center flex-col mx-auto gap-10">
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-2xl text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={handleRegister}
              className="text-2xl bg-black py-[10px] px-[30px] font-bold text-white rounded-xl"
            >
              Register
            </button>
            <button
              onClick={google}
              className="text-2xl flex items-center gap-4 bg-black py-[10px] px-[30px] font-bold text-white rounded-xl"
            >
              Sign In With Google <FcGoogle />
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
