import React, { useRef } from "react";
import { TiArrowLeft } from "react-icons/ti";
import { useFetchApi } from "../utility/Helper";
import { CDNIMG } from "../utility/Constants";
import Shimmer from "./Shimmer";

const First = () => {
  const scrollRef = useRef(null);

  const { data, loading, error } = useFetchApi();

  if (loading) return <Shimmer />;
  if (error) return <h1>Error: {error.message}</h1>;
  if (data == null) return <h1>No Data Found</h1>;

  const info = data.cards[0].card?.card?.gridElements?.infoWithStyle?.info;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - 300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full max-w-[1050px] mx-auto pb-10">
      <div className="flex justify-between items-center font-semibold italic my-2 px-4">
        <p className="text-lg sm:text-xl md:text-2xl">What's on your mind?</p>
        <div className="flex gap-2">
          <TiArrowLeft
            onClick={scrollLeft}
            className="text-[1.5rem] md:text-[2rem] bg-gray-300 active:bg-gray-200 rounded-full cursor-pointer"
          />
          <TiArrowLeft
            onClick={scrollRight}
            className="text-[1.5rem] md:text-[2rem] rotate-180 active:bg-gray-200 bg-gray-300 rounded-full cursor-pointer"
          />
        </div>
      </div>

      <div
        className="flex gap-4 md:gap-10 justify-start overflow-x-scroll no-scrollbar px-4"
        ref={scrollRef}
      >
        {info.map((item, index) => {
          return (
            <img
              key={item.imageId}
              className="w-32 h-36 md:w-40 md:h-44 hover:shadow-lg cursor-pointer"
              src={CDNIMG + item.imageId}
              alt="Mind Image"
            />
          );
        })}
      </div>
    </div>
  );
};

export default First;
