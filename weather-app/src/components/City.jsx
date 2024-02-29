import React from "react";

const City = () => {
  const cities = [
    {
      id: 1,
      title: "Toronto",
    },
    {
      id: 2,
      title: "Seoul",
    },
    {
      id: 3,
      title: "NewYork",
    },
  ];

  return (
    <div className="cities">
      {cities.map((city) => (
        <button key={city.id} className="city">
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default City;
