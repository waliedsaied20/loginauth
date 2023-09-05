import VideoScreen from "../image/Amazing.mp4";
import "../style.css";
import { auth, googleProvider } from "../config/firebase";
import {
//   createUserWithEmailAndPassword,
  signInWithPopup,
//   signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import RobotLoading from "./Robot";
import firebase from "firebase/app";

function Login() {

  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSuccess = () => {
    signInWithPopup(auth, googleProvider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  const loginWithEmail = (e) => {
    e.preventDefault();

    signInWith

  }

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

 

  return (
    <>
      {value ? (
        <RobotLoading />
      ) : (
        <div className="background ">
          <video autoPlay muted loop playsInline className="h-screen">
            <source src={VideoScreen} type="video/mp4" className="h-screen" />
          </video>
          <div className="loginand">
            <form>
              <h3 className="max-sm:text-xl">Login Page</h3>

              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Email or Phone"
                id="username"
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className=" bg-white text-[#080710]  text-xl font-bold px-8 py-2 rounded w-full my-5  "
                onClick={signIn}
              >
                Log In
              </button>
            </form>
            <button
              onClick={loginSuccess}
              className="w-full bg-white text-[#080710]  text-xl font-bold px-8 py-2 rounded flex justify-center items-center"
            >
              SignIn With <FcGoogle className="text-3xl ml-4" />{" "}
            </button>
            <button className="w-full bg-white text-[#080710]  text-xl font-bold px-8 py-2 rounded  my-5 ">
              Register
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
