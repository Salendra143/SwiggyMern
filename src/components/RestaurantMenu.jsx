import React, { useEffect, useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [data, setdata] = useState(null);
  const { resid } = useParams();

  const fetchapi = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await response.json();
    setdata(json.data);
  };

  useEffect(() => {
    fetchapi();
  }, []);

  if (data === null) return <Shimmer/>;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    sla,
    areaName,
  } = data.cards[2].card.card.info;

  const categories = data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (c) => c.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="w-full sm:w-3/4 lg:w-1/2 m-5 shadow-2xl italic rounded-b-2xl p-5">
        <p className="text-xl md:text-2xl font-bold border-b-2 mb-3">{name}</p>
        <div className="flex flex-col gap-1 p-5 font-semibold text-sm border-2 border-gray-300 rounded-2xl">
          <p className="text-lg md:text-xl">
            ⭐{avgRating}{" "}
            <span>
              ({totalRatingsString}) <span>{costForTwoMessage}</span>
            </span>
          </p>
          <p className="text-orange-500 font-bold">{cuisines.join(", ")}</p>
          <p>
            Outlet - <span className="text-gray-400">{areaName}</span>
          </p>
          <p>{sla.slaString}</p>
          <p>{sla.lastMileTravel} | ₹35 Delivery fee will apply</p>
        </div>
      </div>

      <div className="w-full sm:w-3/4 lg:w-1/2">
        <p className="text-center font-semibold text-lg md:text-xl lg:text-2xl">Restaurant Menu</p>
        {categories.map((c, index) => (
          <RestaurantCategory key={index} data={c.card.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
