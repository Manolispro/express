import React from "react";

const Button = ({ handleFavourite, element, text }) => {
  return (
    <div className="w-1/2 flex flex-col">
      <button
        key={element.id}
        onClick={() => {
          text === "SAVE"
            ? handleFavourite(element.id)
            : console.log("handleDelete");
        }}
        className=" w-full items-center  px-8 py-2 mt-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-blueGray-900 focus:ring focus:outline-none"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
