import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ loged, LogOut, LogIn }) => {
  return (
    <div className="text-gray-700 bg-white body-font">
      <div className="flex flex-col flex-wrap p-5 mx-auto border-b md:items-center md:flex-row">
        <a href="./" className="pr-2 lg:pr-8  focus:outline-none">
          <div className="inline-flex items-center">
            <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"></div>
            <h2 className="font-semibold tracking-tighter transition duration-1000 ease-in-out transform text-blueGray-500 dark:text-blueGray-200 lg:text-md text-bold ">
              Express Publishing
            </h2>
          </div>
        </a>
        {loged ? (
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
            <Link
              to="/cats"
              className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
            >
              CATS
            </Link>
            <Link
              to="/favourite"
              className=" text-sm font-semibold text-gray-600 hover:text-gray-800"
            >
              FAVOURITE CATS
            </Link>
          </nav>
        ) : (
          //mpakalistika gia na desmeuei xoro
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
            <a
              href="/"
              className="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
            ></a>
            <a
              href="/favourite"
              className=" text-sm font-semibold text-gray-600 hover:text-gray-800"
            ></a>
          </nav>
        )}
        {loged ? (
          <Link
            to="/"
            onClick={LogOut}
            className="items-center px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-blueGray-900 focus:ring focus:outline-none"
          >
            Logout
          </Link>
        ) : (
          <button
            onClick={LogIn}
            className="items-center px-8 py-2  font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-blueGray-900 focus:ring focus:outline-none"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
