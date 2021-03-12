import React, { useState } from "react";

const Cats = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetch("https://api.thecatapi.com/v1/images/search?limit=9", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "64edff98-7cfc-477b-9519-aaa3bebf78b6",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, []);

  if (loading) {
    return <p>loading..</p>;
  }

  return (
    <section class="overflow-hidden text-gray-700 body-font">
      <div class="container px-5 py-2 mx-auto lg:px-32">
        <div class="flex flex-wrap justify-center mx-auto ">
          <div class="flex flex-wrap justify-center mx-auto ">
            {data.map((element) => (
              <div class="w-full flex-row mt-6 lg:w-2/4 lg:pl-10 lg:py-6 lg:mt-0">
                <img
                  className="object-cover object-center w-full max-h-56 min-h-20 rounded-lg lg:h-auto"
                  key={element.id}
                  src={element.url}
                  alt="Cat"
                />
                {/* todo apothikeuse to id apo kathe click save se ena state isos me speade oparator kane map ksana k filter */}
                <button className=" w-full items-center  px-8 py-2 mt-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-blueGray-900 focus:ring focus:outline-none">
                  Save
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cats;
