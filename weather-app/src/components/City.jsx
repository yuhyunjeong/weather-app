import React from "react";

const City = ({ setQuery }) => {
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
      title: "New York",
    },
  ];

  return (
    <div className="cities">
      {cities.map((city) => (
        <button
          key={city.id}
          className="city"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default City;
