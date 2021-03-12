import React from "react";

const Welcome = ({ user }) => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="cat"
            src="https://image.shutterstock.com/image-photo/cat-medical-mask-protective-antiviral-600w-1684423789.jpg"
          />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <h1 className="mb-8 text-2xl font-bold tracking-tighter text-center text-black lg:text-left lg:text-5xl title-font">
            Welcome {user.name}
          </h1>
          <p className=" uppercase mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
            visit cats to see nine of them and save your favourite ones in the
            favourite section
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
