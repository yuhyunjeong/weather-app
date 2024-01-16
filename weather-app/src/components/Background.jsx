import React from "react";
import City from "./City";
import Inputs from "./Inputs";

const Background = () => {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-amber-100 to-orange-200 h-fit shadow-xl shadow-gray-400">
      <City />
      <Inputs />
    </div>
  );
};

export default Background;
