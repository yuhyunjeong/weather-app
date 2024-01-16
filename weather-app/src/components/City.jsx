import React from "react";

const City = () => {
  const cities = [
    {
      id: 1,
      title: "Seoul",
    },
    {
      id: 2,
      title: "Toronto",
    },
    {
      id: 3,
      title: "London",
    },
    {
      id: 4,
      title: "NewYork",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium">
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default City;
