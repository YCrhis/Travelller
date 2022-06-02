import React from "react";

const NotFound = () => {
  return (
    <div className="text-center text-xl text-gray-400 font-bold flex items-center flex-col mt-7">
      <p className="-mb-[40px]">Sorry, place not found</p>
      <img src="https://i.gifer.com/DLAN.gif" alt="Not Found" className=" w-[300px] h-[300px] object-contain" />
    </div>
  );
};

export default NotFound;
