import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const LoginForm = ({ Login, error, user, loged }) => {
  let history = useHistory();
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();

    if (user.name) {
      history.push("/welcome");
      console.log(user);
    }
    Login(details);
  };
  return (
    <form onSubmit={submitHandler} className="mt-6 w-1/3 mx-auto" action="#">
      <div>
        <label
          htmlFor="name"
          className="block text-base font-medium leading-relaxed text-gray-700"
        >
          User Name
        </label>
        <input
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          type="text"
          name="name"
          placeholder="Your User Name "
          className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
          autoFocus
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="email"
          className="block text-base font-medium leading-relaxed text-gray-700"
        >
          Email Address
        </label>
        <input
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          type="text"
          name="email"
          placeholder="Your Email "
          className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
        />
      </div>
      <div className="flex flex-wrap mt-4 mb-6 -mx-3">
        <div className="w-full px-3 mb-6  md:mb-0">
          <label
            className="text-base font-medium leading-relaxed text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            className="w-full px-4 py-2 mt-2 text-base transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ext-black focus:border-gray-500"
            type="password"
            name="password"
            placeholder="Your Password"
          />
          <div className="mt-1 text-s w-full italic text-red-600 font-bold">
            {error !== "" ? <h2>{error}</h2> : ""}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg bg-gradient-to-r from-black hover:from-black to-black focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 hover:to-black"
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
