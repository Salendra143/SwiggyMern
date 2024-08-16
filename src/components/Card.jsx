import React from "react";

const Card = ({ info }) => {

  const { cloudinaryImageId, cuisines, sla, name, avgRating, areaName,locality } = info.info;

  return (
    <div>
      <div className=" border-2 w-[310px] h-[330px] rounded-2xl italic hover:shadow-2xl cursor-pointer  p-3">
        <img
          className=" w-[300px] h-[180px] rounded-2xl"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
          alt=""
        />
        <p className=" text-[1rem] md:text-[1.5vw] font-semibold">{name}</p>
        <p className=" text-[1rem] md:text-[1.3vw] font-semibold">
          💖 {avgRating} . <span>{sla.slaString}</span>
        </p>
        <p className="text-gray-800 text-xs ">{cuisines.join(", ")}</p>
        <p className="text-gray-800">{areaName} {locality}</p>
      </div>
    </div>
  );
};

export default Card;
